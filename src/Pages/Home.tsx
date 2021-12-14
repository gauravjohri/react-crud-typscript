import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";

export const Home = () => {
    const [album, setAlbum] = useState([]);
    const getAlbum = async () => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=12`);
        let albums = await data.json();
        setAlbum(albums);
    }
    useEffect(() => {
        getAlbum();
    }, [])
    return (
        <Grid container >
            {album.map((value: any, index: number) => (
                <Card key={index} sx={{ maxWidth: 345, margin: '10px' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`https://mui.com/static/images/cards/contemplative-reptile.jpg`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {value.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    )
}