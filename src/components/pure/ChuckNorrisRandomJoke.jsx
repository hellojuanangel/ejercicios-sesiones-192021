import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/chuckNorrisService';
import { Button } from '@mui/material';

const ChuckNorrisRandomJoke = () => {

    const [joke, setJoke] = useState(null);
    const [voted, setVoted] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        obtainJoke();
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then( response => {
                setJoke(response.data);
                setVoted(false);
            })
            .catch( error => {
                alert(`Somethin went wrong: ${error}`);
            });
    }

    const like = () => {
        setLikes(likes + 1);
        setVoted(true);
    }

    const dislike = () => {
        setDislikes(dislikes + 1);
        setVoted(true);
    }

    return (
        <div>
            <h1>CHUCK NORRIS RANDOM JOKE</h1>

            <div>
                {
                    joke != null ?
                    (<p>{ joke.value }</p>)
                    :
                    (<p>Generating joke...</p>)
                }
            </div>

            <Button variant="contained" onClick={obtainJoke}>GENERATE JOKE</Button>

            <hr/>

            <Button variant="contained" onClick={like} disabled={voted}>LIKE {likes}</Button>
            <Button variant="contained" onClick={dislike} disabled={voted}>DISLIKE {dislikes}</Button>

        </div>
    );
}

export default ChuckNorrisRandomJoke;
