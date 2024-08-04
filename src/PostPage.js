import React, { useState } from 'react';
import OGImageGenerator from './components/OGImageGenerator';

const PostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [ogImageUrl, setOgImageUrl] = useState('');

    const handleImageUpload = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleGenerateOGImage = (dataUrl) => {
        setOgImageUrl(dataUrl);
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Create a Post</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="10"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    type="file"
                    className="mb-4"
                    onChange={handleImageUpload}
                />
                {image && <img src={image} alt="Post" className="mb-4 max-w-full h-auto rounded-lg shadow-md" />}
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
            </div>
            <div className="mt-8">
                <OGImageGenerator title={title} content={content} image={image} onGenerate={handleGenerateOGImage} />
            </div>
            {/* Display the OG Image Preview */}
            {ogImageUrl && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">OG Image Preview</h2>
                    <img src={ogImageUrl} alt="OG Image" className="max-w-full h-auto rounded-lg shadow-md" />
                </div>
            )}
        </div>
    );
};

export default PostPage;
