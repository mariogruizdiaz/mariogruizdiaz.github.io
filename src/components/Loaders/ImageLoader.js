import React, { Component } from "react";
import "./ImageLoader.css";
import { SpinnerDiamond } from 'spinners-react';

class ImageLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            isPortrait: false,
        };
    }

    componentDidMount() {
        const img = new Image();
        img.src = this.props.source;
        img.onload = () => {
            const isPortrait = img.height > img.width;
            this.setState({
                isPortrait: isPortrait,
                imageLoaded: true,
            });
        };
    }

    render() {
        const { source, alt, className, color, secondaryColor } = this.props;
        const { imageLoaded } = this.state;

        return (
            <div className={`imageLoader ${className}`} style={{ maxWidth: "500px", maxHeight: "500px", width: "100%", height: "auto", position: "relative" }}>
                {!imageLoaded && (
                    <SpinnerDiamond
                        size={50}
                        thickness={80}
                        speed={80}
                        secondaryColor={secondaryColor}
                        color={color}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                )}
                <img
                    className="realImg"
                    src={source}
                    alt={alt}
                    style={{
                        opacity: imageLoaded ? 1 : 0,
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain", // Asegura que la imagen se ajuste al contenedor sin cortar
                        display: imageLoaded ? "block" : "none",
                    }}
                />
            </div>
        );
    }
}

export default ImageLoader;
