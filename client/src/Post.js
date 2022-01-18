import React from 'react'

function Post({post}) {
    console.log(post)
    return (
        <div className="post">
            <h1>{post.caption}</h1>
            {post.image}
            {post.total_likes}
        </div>
    )
}

export default Post
