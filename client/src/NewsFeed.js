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
import NewCard from './NewCard';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                InstChat
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function NewsFeed({ posts }) {
    const [like, setLike] = useState(false)


    let caption = posts.map((post) => post.caption)

    function handleLike() {
        setLike(!like)
        
    }
    console.log(like)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Album layout
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {posts.map((post) => (
                            <NewCard key={post.id} post={post}/>
                            // <Grid item key={post.id} xs={12} sm={6} md={4}>
                                // <Card key={post.id}
                                //     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                // >
                                //     <CardMedia
                                //         component="img"
                                //         sx={{
                                //             // 16:9
                                //             pt: '56.25%',
                                //         }}
                                //         image="https://source.unsplash.com/random"
                                //         alt="random"
                                //     />
                                //     <CardContent sx={{ flexGrow: 1 }}>
                                //         <Typography gutterBottom variant="h5" component="h2">
                                //             {post.caption}
                                //         </Typography>
                                //         <Typography>
                                //             {post.caption}
                                //         </Typography>
                                //     </CardContent>
                                //     <CardActions>
                                //         {like ? (
                                //             <Button onClick={handleLike} size="small"><ThumbUpIcon/></Button>
                                //         ) : (
                                //             <Button onClick={handleLike} size="small">Like</Button>
                                //         )}
                                //         <Button size="small">Edit</Button>
                                //     </CardActions>
                                // </Card>
                            // </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>

                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Created by Webster Bian
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}