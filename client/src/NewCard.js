import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function NewCard({ post, currentUser, setPosts, posts, handleRemovePost, id }) {
    const [like, setLike] = useState(false)
    const [edit, setEdit] = useState(false)
    const [caption, setCaption] = useState({
        caption: ""
    });

    function handleLike() {
        setLike(!like)
    }

    const handleUpdateClick = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('caption', caption)
        console.log(caption)
        fetch(`/posts/${id}`, {
            method: 'PATCH',
            body: formData
        })
        window.location.reload()
    }
    
    const handleUpdatePost = (e) => {
        setCaption(e.target.value);
    }
    
    console.log(caption)
    
    function handleEdit() {
        setEdit(!edit)
    }

    const editForm = () => {
        if (edit === false) {
            return (
                null
            )
        } else {
            return (
                <label>
                    <input id='edit' onChange={handleUpdatePost} type="text"></input>
                    <FontAwesomeIcon onClick={handleUpdateClick} id='editSubmit' icon={faEdit} />
                </label>
            )
        }
    }

    const ownPost = () => {
        if (post.user_id === currentUser.id) {
            return (
                <div >
                    <Button className='editanddelete' onClick={handleEdit} size="small">Edit</Button>
                    <Button className='editanddelete' id='delete' onClick={handleDelete} size="small">Delete</Button>
                </div>
            )
        } else {
            return null
        }
    }


    function handleDelete() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        });
        handleRemovePost(id)
    }

    console.log(id)

    return (
        <Card className='postcard' key={post.id}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:'rgb(155, 155, 155)'}}
        >
            <Typography id='postusername'>
                <h2>{post.user.username}</h2>
            </Typography>
            <CardMedia
                id='img'
                component="img"
                sx={{
                
                    // 16:9
                    pt: '.25%',
                }}
                image={post.image_url}
                alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {post.caption}
                </Typography>
                <Typography>
                    {/* {post.caption} */}
                </Typography>
            </CardContent>
            <CardActions>
                {like ? (
                    <Button onClick={handleLike} size="small"><ThumbUpIcon /></Button>
                ) : (
                    <Button onClick={handleLike} size="small">Like </Button>
                )}
                {ownPost()}
                {editForm()}
            </CardActions>
        </Card>
    )
}

export default NewCard
