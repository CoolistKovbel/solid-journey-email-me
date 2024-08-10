import { createClient } from '@vercel/postgres';
 
const handleEmailList = async () => {
  const client = createClient();
  await client.connect();
 
  try {
    const likes = 100;
    const { rows, fields } =
      await client.sql`SELECT * FROM posts WHERE likes > ${likes};`;
  } finally {
    await client.end();
  }
}