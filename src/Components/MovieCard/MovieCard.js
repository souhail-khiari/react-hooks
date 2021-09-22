import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <Card className="MovieCard">
            <Card.Img
                variant="top"
                src={movie.posterUrl}
                className="movieImg"
            />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button variant="primary">Download</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
