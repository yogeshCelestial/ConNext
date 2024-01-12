'use client';
import styles from './page.module.css';
import { useSession, signOut, signIn } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <main className={styles.main}>
      <h1>Hello From ConNext</h1>

      {session ?
        (
          <>
            <h3>Welcome {session?.user?.name}</h3>
            <button type='button' onClick={() => signOut()}>SignOut</button>
          </>
        )
        : (<button type='button' onClick={() => signIn('google')}>SignIn</button>)}
    </main>
  )
}
