import { pg } from '../../utils/server/database';
import type { Platform, Categories } from '../../types/app';

type Result = ((any) | (null | Categories))[];

export default async function getCategories(platform: Platform): Promise<Result> {
  const client = await pg.connect();
  try {
    const result = await pg.query(`
      SELECT id, name, shortname, locale
      FROM categories;
    `);
    return [null, result.rows]
  } catch(e) {
    return [e, null];
  } finally {
    client.release();
  }
}
