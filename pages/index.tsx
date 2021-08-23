import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home({ posts }: any) {


  return (
    <div>

      <h1>User :</h1>
      {posts.map((post: any) => (
        <>
          <h2> Name </h2>
          <p>{post.Name}</p>
          <h2> email </h2>
          <p>{post.email}</p>
        </>
      ))}
    </div>
  )
}

export async function getServerSideProps(context: any) {

  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  console.log(posts);
  return {
    props: {
      posts
    },
  }
}
