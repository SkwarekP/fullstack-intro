'use client'
import React, {ChangeEvent, useState, FormEvent} from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function AddPost() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    try{
        await fetch('/api/add-post', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content}) })
            
        router.refresh()
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
  };
    return (
        <main>
            <Link href="/">View Feed</Link>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
        </main>
    )
}