// import styles from '../styles/globals.css'
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

    <div className="flex justify-between flexflow-column w-52 h-60 m-auto  ">
      <button onClick={() => router.push("signUp")}>БҮРТГҮҮЛЭХ</button>
      <button  onClick={() => router.push("loginPage")}>НЭВТРЭХ</button>
    </div>
  );
}
  


