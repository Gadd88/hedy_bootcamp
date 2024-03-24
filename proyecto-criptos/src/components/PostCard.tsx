'use client'
import { Post } from '@/app/posts/page'
import Link from 'next/link'
import React from 'react'

type Prop = {
  post: Post
}

const PostCard = ({post}:Prop):React.JSX.Element => {
  return (
    <div className='border-2 border-blue-400 p-10 max-w-80 rounded-lg flex flex-col items-start justify-around min-h-96'>
        <h3>{post.id}.{post.title}</h3>
        <p>{post.body}</p>
        <button className='border-2 bg-black text-white rounded-md border-white p-2'>
            <Link href={`/posts/${post.id}`}>Ver más</Link>
        </button>
    </div>
  )
}

export default PostCard