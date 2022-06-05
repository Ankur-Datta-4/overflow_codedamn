import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Infofed() {


    return (
        <Card sx={{ maxWidth: 220 }}>
            <CardActionArea>
                <CardContent style={{ textAlign: "center", textDecoration: "none" }}>
                    <Typography gutterBottom variant="h7" component="div" >
                        <Link style={{ textDecoration: "none" }} to="/">G R O U P S</Link>

                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                        <Link style={{ textDecoration: "none" }} to="/">E V E N T S</Link>
                    </Typography>
                </CardContent>
                <hr />
            </CardActionArea>
            <CardActions style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                <Button style={{ textAlign: "center" }} size="small" color="primary">
                    Discover More
                </Button>
            </CardActions>
        </Card>
    );
}