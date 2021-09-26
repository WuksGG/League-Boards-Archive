/etl/data/na
/etl/data/eu

tar -xvf eu.tar.gz

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