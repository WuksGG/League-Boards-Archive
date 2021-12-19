import styles from './discussion.module.css';
import TimeAgo from 'react-timeago';

import { marked } from 'marked';

export default function ThreadPage({
  title,
  user,
  createdAt,
  application,
  content,
}) {
  // const md = mdi()
  //   .use(mdic, 'stickers', {
  //     validate: function (params) {
  //       console.log('validating');
  //       return params.trim().match(/^{{sticker:.+}}$/);
  //     },
  //     render: function (tokens, idx) {
  //       console.log('rendering');
  //       var m = tokens[idx].info.trim().match(/^{{sticker:.+}}$/);
  //       console.log(m);
  //       if (tokens[idx].nesting === 1) {
  //         return '<div>omg</div>';
  //       } else {
  //         return '</div>\n'
  //       }
  //     },
  //     marker: '{'
  //   });

  const lolAssets = {
    name: 'lolAssets',
    level: 'inline',
    start(src) { return src.match(/{{/)?.index; },
    tokenizer(src, tokens) {
      const rule = /{{[a-z]{3,10}:[a-z\-]{3,10}}}/;
      const match = rule.exec(src);
      if (match) {
        const token = {
          type: 'lolAssets',
          raw: match[0],
          // text: match[0].trim(),
          // tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    },
    renderer(token) {
      const tokenParts = token.raw.slice(2, -2).split(':');
      // handle sticker
      // handle champion
      const stickers = {
        "sg-kiko": "https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-kiko.png",
        "slayer-pantheon-thumbsnotchecked": "https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-pantheon-thumbs.png"
      }
      // return `<div>test</div>`;
      if (!stickers[tokenParts[1]]) { return token.raw; }
      return `<span class="sticker" style="background-image: url(${stickers[tokenParts[1]]})"></span>`;
    }
  };

  marked.use({ extensions: [lolAssets] });

  const markdown = marked.parse(content.body);
  // const markdown = marked.parse('{{sticker:sg-kiko}}');
  console.log(markdown);
  return (
    <div className={styles.container}>
      <h2>{application.name}</h2>
      <div className={styles.inner}>
        <div className={styles.discussion}>
          <div className={styles['discussion-title']}>
            <div className={styles.title}>{title}</div>
            <div className={styles.byline}>{user.name} ({user.realm}) submitted <TimeAgo date={createdAt} /> in {application.name}</div>
          </div>
          <div className={styles.content}>
            <div className={styles.body} dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getDiscussion } = await import('../../../../models/discussions');
  const { rows } = await getDiscussion(context);
  const results = rows[0]?.results;

  if (!results) {
    return {
      props: {
        notFound: true,
      }
    }
  }

  return {
    props: results
  }
}