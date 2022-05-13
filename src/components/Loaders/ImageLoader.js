import React, { useState } from "react";
import "./ImageLoader.css";
import { SpinnerDiamond } from 'spinners-react';

// Props: source, alt
const ImageLoader = ({ source, alt, className, color, secondaryColor }) => {
    // state of images
    const [imageLoaded, setImageLoaded] = useState(false);


    // render code
    return (
        <div style={{ width: "inherit", height: "inherit"}}>
            <img
                className={className}
                src={source}
                alt={alt}
                style={{
                    opacity: imageLoaded ? "1" : "0",
                    objectFit: "scale-down",
                    width: "inherit",
                    height: "inherit"
                }}
                onLoad={() => setImageLoaded(true)}
            />

            {
                !imageLoaded &&
                <SpinnerDiamond
                    className={className}
                    size={"80%"}
                    thickness={80}
                    speed={80}
                    secondaryColor={secondaryColor}
                    color={color}
                    style={{
                        objectFit: "scale-down",
                        width: "inherit",
                        height: "inherit"
                    }}
                />
            }
        </div>
    );
};

export default ImageLoader;