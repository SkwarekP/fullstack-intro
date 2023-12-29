import Image from 'next/image'
import styles from './page.module.css'
import prisma from './lib/prisma'
import PostData from './components/PostData';


interface IPost {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  authorId: string | null;
  author: {
    name: string | null;
  } | null;
}


async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: false},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts: IPost[] = await getPosts();
  console.log({posts})
  
  return (
    <main className={styles.main}>
      <h1>Feed</h1>
        {posts.map((item: IPost) => (
          <PostData key={item.id} id={item.id} title={item.title} content={item.content} authorName={item.author?.name} />
        ))}
    </main>
  )
}
