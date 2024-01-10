import styles from './page.module.css';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany();

    // const user1 = await prisma.user.create({
    //   data: {
    //     name: 'Alice',
    //     email: 'alice@prisma.io',
    //   }
    // })
  // return user1;
}

export default async function Home() {
  const data = await main();
  console.log(data);

  return (
    <main className={styles.main}>
      <h1>Hello From ConNext</h1>     
    </main>
  )
}
