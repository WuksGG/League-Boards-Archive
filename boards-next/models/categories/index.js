import { pool } from '../../helpers/database';

export async function getCategories(realm) {
  const client = await pool.connect();
  try {
    return await client.query(`SELECT * FROM categories ORDER BY id`);
  } catch (e) {
    console.log(e);
    return e;
  } finally {
    client.release();
  }
}

export async function getThreadsFromCategory(context) {
  console.log('hello');
  console.log(context.query);
  return 1;
}