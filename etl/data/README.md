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
	ON child.threadid = parent.threadid AND child.parentcommentid = parent.commentid
),
maxlevel AS (
	SELECT max(level) FROM comments_with_level
),
c_tree AS (
	SELECT comments_with_level.*,
		NULL::jsonb children
	FROM comments_with_level, maxlevel
	WHERE level = maxlevel

	UNION (
		SELECT (branch_parent).*,
			jsonb_agg(branch_child)
		FROM (
			SELECT branch_parent,
			to_jsonb(branch_child) - 'level' - 'parentcommentid' - 'commentid' AS branch_child
			FROM comments_with_level branch_parent
			JOIN c_tree branch_child ON branch_child.parentcommentid = branch_parent.commentid
		) branch
		GROUP BY branch.branch_parent

		UNION

		SELECT c.*,
			NULL::jsonb
		FROM comments_with_level c
		WHERE NOT EXISTS (
			SELECT 1
			FROM comments_with_level hypothetical_child
			WHERE hypothetical_child.parentcommentid = c.commentid
		)
	)
)
SELECT *
FROM comments_with_level;

==============

WITH RECURSIVE comments_from_parents AS (
		SELECT threadid, commentid, message, userid, parentcommentid, createdat, modifiedat, upvotes, downvotes, numchildren, 0 as level
		FROM comments
		WHERE threadid = 'zzwLmIA9' AND parentcommentid IS NULL

	UNION ALL

		SELECT c.threadid, c.commentid, c.message, c.userid, c.parentcommentid, c.createdat, c.modifiedat, c.upvotes, c.downvotes, c.numchildren, level + 1
		FROM comments_from_parents p
		JOIN comments c
		ON c.parentcommentid = p.commentid AND c.threadid = p.threadid
),
comments_from_children AS (
		SELECT c.parentcommentid, c.threadid, jsonb_agg(jsonb_build_object(
			'id', c.commentid,
			'message', c.message,
			'user', (
				SELECT jsonb_build_object(
					'id', c.userid,
					'username', u.name
				)
				FROM users u
				WHERE u.id = c.userid
			),
			'parentCommentId', c.parentcommentid,
			'createdAt', c.createdat,
			'modifiedAt', c.modifiedAt,
			'upVotes', c.upvotes,
			'downvotes', c.downvotes,
			'numChildren', c.numchildren,
			'comments', '[]'::jsonb
		))::jsonb AS js
		FROM comments_from_parents tree
		JOIN comments c USING (threadid, commentid)
		WHERE level > 0
		GROUP BY c.parentcommentid, c.threadid

	UNION ALL

		SELECT c.parentcommentid, c.threadid, jsonb_build_object(
			'id', c.commentid,
			'message', c.message,
			'user', c.userid,
			'parentCommentId', c.parentcommentid,
			'createdAt', c.createdat,
			'modifiedAt', c.modifiedAt,
			'upVotes', c.upvotes,
			'downvotes', c.downvotes,
			'numChildren', c.numchildren
			) || jsonb_build_object('comment3s', js) as js
		FROM comments_from_children tree
		JOIN comments c ON tree.parentcommentid = c.commentid AND c.threadid = tree.threadid
)
SELECT jsonb_pretty(jsonb_agg(js))
FROM comments_from_children
WHERE threadid = 'zzwLmIA9' AND parentcommentid IS NULL;