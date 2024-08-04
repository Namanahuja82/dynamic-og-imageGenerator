import React from 'react';
import PostPage from './PostPage';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
    return (
        <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
            <PostPage />
        </div>
    );
};

export default App;
