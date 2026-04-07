import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const TextEditor = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleOCR = () => {
        if (image) {
            Tesseract.recognize(
                image,
                'eng',
                { logger: info => console.log(info) }
            ).then(({ data: { text } }) => {
                setText(text);
            });
        }
    };

    return (
        <div>
            <h1>OCR Text Editor</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleOCR}>Extract Text</button>
            <div>
                <h2>Extracted Text:</h2>
                <textarea value={text} readOnly rows="10" cols="50" />
            </div>
        </div>
    );
};

export default TextEditor;