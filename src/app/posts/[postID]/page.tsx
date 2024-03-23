import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'
import Posts from '../page'
import type { Post } from '../page'

async function loadPost(id: number): Promise<Post>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const result = await response.json()
    return result
}
type Prop = {
    params: {
        postID: number
    }
}
const Post = async ({params}:Prop ) => {
    const postData = await loadPost(params.postID)
    const {userId, id, title, body} = postData

    return (
        <div className='max-w-[1200px] w-full mx-auto h-[82dvh]'>
            <section className='border-2 border-white rounded-lg p-10 mb-28 flex flex-col items-start justify-between gap-10'>
                <h1><span>{id}</span>. {title}</h1>
                <p>{body}</p>
                <p>User: {userId}</p>
                <button className='p-5 rounded-md border-2 border-white bg-black'>
                    <Link href='/posts'>Volver</Link>
                </button>
            </section>
        </div>
    )
}

export default Post