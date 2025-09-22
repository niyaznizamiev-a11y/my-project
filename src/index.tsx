import React from 'react';
import {createRoot} from 'react-dom/client';
import {Button} from "./components/Button";

function BlogPost(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Button>Удалить</Button>
        </div>
    )
}

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <>
        <BlogPost title={"JSX"} description={"Пост про JS"}/>
        <BlogPost title={"Python"} description={"Пост про Py"}/>
        <BlogPost title={"PHP"} description={"Пост про PHP"}/>
    </>
);