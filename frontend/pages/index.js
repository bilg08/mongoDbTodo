import styles from '../styles/Home.module.css'
import {useRouter} from "next/router"
export async function getStaticProps() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button onClick={() => router.push("signUp")}>БҮРТГҮҮЛЭХ</button>
      <button onClick={() => router.push("loginPage")}>НЭВТРЭХ</button>
    </div>
  );
}
  


