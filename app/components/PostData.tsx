import styles from "./PostData.module.css"

interface IPost {
    id: string;
    title: string;
    content: string | null;
    authorName: string | undefined | null;
}

export default function PostData({id, title, content, authorName}: IPost) {
    return (
        <div className={styles.card}>
              <h3>ID: {id}</h3>
              <span>title: {title}</span>
              <span>content: {content}</span>
              <span>author name: {authorName}</span>
        </div>
    )
}