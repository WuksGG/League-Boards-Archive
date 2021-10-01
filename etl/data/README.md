/etl/data/na
/etl/data/eu

tar -xvf eu.tar.gz

==============

WITH RECURSIVE comments_with_level AS (
		SELECT *,
			0 AS level
		FROM comments
		WHERE threadid = 'zzwLmIA9' AND parentcommentid IS NULL

	UNION ALL

		SELECT child.*,
			parent.level + 1
		FROM comments child
		JOIN comments_with_level parent
		ON child.threadid = parent.threadid
			AND child.parentcommentid = parent.commentid
),
maxlevel AS (
	SELECT max(level) maxlevel
	FROM comments_with_level
),
c_tree AS (
		SELECT comments_with_level.*,
			'[]'::jsonb children
		FROM comments_with_level, maxlevel
		WHERE level = maxlevel

	UNION (
		SELECT (branch_parent).*,
			jsonb_agg(branch_child)
		FROM (
			SELECT branch_parent,
			(
				to_jsonb(branch_child) - 'level' - 'threadid' - 'userid' - 'children' ||
			 	jsonb_build_object('user', (
					SELECT jsonb_build_object(
						'id', u.id,
						'username', u.name,
						'summonerLevel', u.summonerlevel,
						'profileIcon', u.profileicon,
						'realm', u.realm,
						'isModerator', u.ismoderator,
						'isRioter', u.isrioter,
						'createdAt', u.createdat,
						'banEndsAt', u.banendsat
					)
					FROM users u
					WHERE u.id = branch_child.userid
				)) ||
				jsonb_build_object('comments', children)
			) AS branch_child
			FROM comments_with_level branch_parent
			JOIN c_tree branch_child ON branch_child.parentcommentid = branch_parent.commentid
		) branch
		GROUP BY branch.branch_parent

		UNION

		SELECT c.*,
			'[]'::jsonb
		FROM comments_with_level c
		WHERE NOT EXISTS (
			SELECT 1
			FROM comments_with_level hypothetical_child
			WHERE hypothetical_child.parentcommentid = c.commentid
		)
	)
)
SELECT jsonb_build_object(
	'comments', array_to_json(
		array_agg(
			row_to_json(c_tree)::JSONB - 'level' - 'threadid' - 'userid' - 'children' - 'commentid' || (
				jsonb_build_object('user', (
					SELECT jsonb_build_object(
						'id', u.id,
						'username', u.name,
						'summonerLevel', u.summonerlevel,
						'profileIcon', u.profileicon,
						'realm', u.realm,
						'isModerator', u.ismoderator,
						'isRioter', u.isrioter,
						'createdAt', u.createdat,
						'banEndsAt', u.banendsat
					)
					FROM users u
					WHERE u.id = userid
				))
			) ||
			jsonb_build_object(
				'comments', children,
				'id', commentid
			)
		)
	)::jsonb
) tree
FROM c_tree
WHERE level = 0;