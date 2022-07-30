import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Home(props) {
    return (
        <div className="home">
            <h1>Li Yuan's Home Page</h1>
            <p>to be finished...</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
