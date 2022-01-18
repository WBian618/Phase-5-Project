import React from 'react'
import Post from './Post'

function PostList({allPosts}) {
    console.log(allPosts)
    return (
        <div>
            {allPosts.map((post) => {
                return <Post post={post}/>
            })}
            
        </div>
    )
}

export default PostList
