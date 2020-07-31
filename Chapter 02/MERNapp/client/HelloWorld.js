import React from 'react';
import { hot } from 'react-hot-loader';

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>Hi!</p>
        </div>
    )
}

export default hot(module)(HelloWorld)