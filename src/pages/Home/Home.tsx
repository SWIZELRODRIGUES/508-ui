import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const history = useNavigate()
    return (
        <div >
            Home
            <button type="button" className="btn btn-primary" onClick={() =>
                history('/summary')
            }>
                Fix
            </button>
        </div>
    );
}

export default Home;
