import React from 'react';
import { Link } from 'react-reouter-dom';

export default () => {
    return (
        <div>
            Anda sedang di halaman dummy lainnnya!
            <Link to="/">Go back home</Link>
        </div>
    );
};