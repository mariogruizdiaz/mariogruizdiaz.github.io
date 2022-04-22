import React, { useState } from "react";
import "./ImageLoader.css";
import { SpinnerDiamond } from 'spinners-react';

// Props: source, alt
const ImageLoader = ({ source, alt, className, color, secondaryColor }) => {
    // state of images
    const [imageLoaded, setImageLoaded] = useState(false);


    // render code
    return (
        <div>
            <img
                className={className}
                src={source}
                alt={alt}
                style={{
                    opacity: imageLoaded ? "1" : "0",
                }}
                onLoad={() => setImageLoaded(true)}
            />

            {
                !imageLoaded &&
                <SpinnerDiamond
                    className={className}
                    size={"100%"}
                    thickness={80}
                    speed={80}
                    secondaryColor={secondaryColor}
                    color={color}
                />
            }
        </div>
    );
};

export default ImageLoader;