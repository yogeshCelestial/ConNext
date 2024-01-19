import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';

const Button = styled('button')({
    width: "fit-content",
    // border: "none",
    padding: "4px 8px",
    border: "1px solid teal",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "white",
    color: "teal",
    '&:hover': {
        border: "1px solid white",
        backgroundColor: "teal",
        color: "black",
    },
});


export default function CardComp({ id, image, title }: { id: string, image: string, title: string }) {
    const router = useRouter();
    const openPost = (postId: string) => {
        router.push(`/post/${postId}`)
    }
    return (
        <div>
            <CardActionArea onClick={() => openPost(id)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="interest"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button sx={{ marginLeft: '20px', marginBottom: '10px' }}>Read...</Button>
        </div>
    );
}