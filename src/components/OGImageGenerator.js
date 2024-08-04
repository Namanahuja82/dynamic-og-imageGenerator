import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

const OGImageGenerator = ({ title, content, image, onGenerate }) => {
    const ogImageRef = useRef(null);

    const generateOGImage = async () => {
        if (ogImageRef.current === null) {
            return;
        }

        const dataUrl = await toPng(ogImageRef.current);
        onGenerate(dataUrl);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'og-image.png';
        link.click();
    };

    return (
        <div className="text-center">
            <div ref={ogImageRef} className="og-image bg-white p-4 border rounded-lg shadow-md inline-block">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-2">{content}</p>
                {image && <img src={image} alt="Post" className="mt-2 max-w-full h-auto rounded-lg" />}
            </div>
            <button onClick={generateOGImage} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                Generate OG Image
            </button>
        </div>
    );
};

export default OGImageGenerator;
