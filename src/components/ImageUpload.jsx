import React, { useState } from 'react';

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const imageFile = files.find(file => file.type.startsWith('image/'));
        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
                border: '2px dashed #cccccc',
                borderRadius: '5px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            {image ? (
                <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
            ) : (
                <p>Drag and drop an image here, or click to upload</p>
            )}
        </div>
    );
};

export default ImageUpload;