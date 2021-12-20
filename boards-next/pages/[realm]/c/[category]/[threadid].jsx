import styles from './discussion.module.css';
import TimeAgo from 'react-timeago';
import Link from 'next/link';

import { marked } from 'marked';

export default function ThreadPage({
  query,
  title,
  user,
  createdAt,
  application,
  content,
}) {
  const lolAssets = {
    name: 'lolAssets',
    level: 'inline',
    start(src) { return src.match(/{{/)?.index; },
    tokenizer(src, tokens) {
      const rule = /^{{(sticker|champion):[a-z\-]{3,25}}}/;
      const match = rule.exec(src);
      if (match) {
        const token = {
          type: 'lolAssets',
          raw: match[0],
          //text: match[0].trim(),
          // tokens: []
        };
        //this.lexer.inline(token.text, token.tokens);
        return token;
      }
    },
    renderer(token) {
      const [delimType, parseKey] = token.raw.slice(2, -2).split(':');
      // handle sticker
      // handle champion
      // handle summonerSpells
      const stickers = {
        'slayer-jinx-catface': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-jinx-catface.png',
        'slayer-jinx-unamused': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-jinx-unamused.png',
        'slayer-jinx-wink': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-jinx-wink.png',
        'slayer-pantheon-popcorn': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-pantheon-popcorn.png',
        'slayer-pantheon-rainbows': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-pantheon-rainbow.png',
        'slayer-pantheon-thumbs': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/slayer-pantheon-thumbs.png',
        'zombie-brand-clap': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/zombie-brand-clap.png',
        'zombie-brand-facepalm': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/zombie-brand-facepalm.png',
        'zombie-brand-mindblown': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/zombie-brand-mindblown.png',
        'zombie-nunu-bummed': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/zombie-nunu-bummed.png',
        'zombie-nunu-hearts': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/zombie-nunu-hearts.png',
        'zombie-nunu-tears': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/zombie-nunu-tears.png',
        'cass-cry': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/cass-cry.png',
        'darius-angry': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/darius-angry.png',
        'draven-pose': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/draven-pose.png',
        'fiora-cool': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/fiora-cool.png',
        'galio-happy': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/galio-happy.png',
        'garen-swing': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/garen-swing.png',
        'katarina-love': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/katarina-love.png',
        'leblanc-funny': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/leblanc-funny.png',
        'poppy-wink': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/poppy-wink.png',
        'sona-playing': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/sona-playing.png',
        'vayne-pose': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/vayne-pose.png',
        'vlad-salute': 'https://lolstatic-a.akamaihd.net/stickers/slayer140/vlad-salute.png',
        'sg-ahri-1': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-ahri-1.png',
        'sg-ahri-2': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-ahri-2.png',
        'sg-ahri-3': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-ahri-3.png',
        'sg-ezreal': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-ezreal.png',
        'sg-janna': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-janna.png',
        'sg-jinx': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-jinx.png',
        'sg-kiko': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-kiko.png',
        'sg-lulu': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-lulu.png',
        'sg-lux': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-lux.png',
        'sg-lux-2': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-lux-2.png',
        'sg-miss-fortune': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-miss-fortune.png',
        'sg-poppy': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-poppy.png',
        'sg-shisa': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-shisa.png',
        'sg-soraka': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-soraka.png',
        'sg-syndra': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-syndra.png',
        'sg-zephyr': 'https://lolstatic-a.akamaihd.net/stickers/starguardian140/sg-zephyr.png',
      };
      // If the sticker doesn't exist, just return the original string
      // Stickers List: https://www.reddit.com/r/leagueoflegends/comments/fc9ra0/all_the_stickers_from_the_league_forums_in_one/
      // Thanks to u/DarkAndromeda31
      // https://drive.google.com/drive/folders/1uwcG2HwBKMzx2hE809b_tbbrn6pw704u
      console.log(delimType, parseKey);
      // if (!stickers[tokenParts[1]]) { return token.raw; }
      // return `<div>test</div>`;
      return `<span class="sticker" style="background-image: url(${stickers[parseKey]})"></span>`;
    }
  };

  marked.use({ extensions: [lolAssets] });

  const markdown = marked.parse(content.body);
  console.log(query);
  return (
    <div className={styles.container}>
      <h2>{application.name}</h2>
      <div className={styles.inner}>
        <div className={styles.discussion}>
          <div className={styles['discussion-title']}>
            <div className={styles.title}>{title}</div>
            <div className={styles.byline}>
              <span className={styles.icon}>
                <img src={user.isRioter ? `/assets/images/riot_fist.png` : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIcon}.png`} />
              </span>
              <span>
                <Link href={`/${query.realm}/player/${user.realm}/${user.name}`}>
                  <a className={user.isRioter ? 'isRioter': null}>{user.name}</a>
                </Link> ({user.realm})&nbsp;
                submitted <TimeAgo date={createdAt} /> in&nbsp;
                <Link href={`/${query.realm}/c/${application.shortName}`}>
                  {application.name}
                </Link>
              </span>
            </div>
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
    props: {
      ...results,
      query: context.query
    }
  }
}