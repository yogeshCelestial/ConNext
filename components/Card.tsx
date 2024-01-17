import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';
import { SnglPost } from '@/app/post/[postId]/page';

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


export default function CardComp({ image, title }: { image: string, title: string }) {
    return (
        <div>
            <CardActionArea>
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
            <Button sx={{ marginLeft: '20px'}}>Read More</Button>
        </div>
    );
}