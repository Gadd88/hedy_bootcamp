import PostCard from '@/components/PostCard'
import React from 'react'

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

async function loadPosts(): Promise<Post[]>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const res = await fetch(url)
    const data = await res.json()
    return data.slice(0,10) 
}
const Posts = async () => {
    const posts = await loadPosts()

    return (
        <div className='flex flex-wrap items-start justify-center gap-5 max-w-[1200px] bg-transparent mx-auto'>
            {
                posts.map(post => (
                    <PostCard 
                        key={post.id}
                        post={post}
                        />
                ))
            }
        </div>
    )
}

export default Posts