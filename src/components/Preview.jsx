import React from 'react';

const Preview = ({ imageSrc, detectedText }) => {
    return (
        <div className="preview">
            <h2>Image Preview</h2>
            {imageSrc && <img src={imageSrc} alt="Preview" />}
            <h3>Detected Text</h3>
            <ul>
                {detectedText.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Preview;