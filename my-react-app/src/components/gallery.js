import React from 'react';
import './Gallery.css';

const images = [
    'my-react-app/src/subaru.jpg',
    'my-react-app/src/toyota.jpg',
];

const Gallery = () => {
    return (
        <div className="Gallery">
            <h1>Image Gallery</h1>
            <div className="GalleryGrid">
                {images.map((src, index) => (
                    <div className="GalleryItem" key={index}>
                        <img src={src} alt={`Gallery item ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

