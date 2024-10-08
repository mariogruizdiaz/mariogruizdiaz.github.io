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
        this._isMounted = false; // Variable para controlar si el componente está montado
    }

    componentDidMount() {
        this._isMounted = true; // Marca el componente como montado
        const img = new Image();
        img.src = this.props.source;
        img.onload = () => {
            if (this._isMounted) { // Solo actualiza el estado si el componente sigue montado
                const isPortrait = img.height > img.width;
                this.setState({
                    isPortrait: isPortrait,
                    imageLoaded: true,
                });
            }
        };
    }

    componentWillUnmount() {
        this._isMounted = false; // Marca el componente como desmontado
    }

    render() {
        const { source, alt, maxWidth, color, secondaryColor } = this.props;
        const { imageLoaded } = this.state;

        const styles = maxWidth === 100 ? {maxWidth: "100px", maxHeight: "100px",  width: "100%", height: "auto", paddingTop: "30%"} : { maxWidth: "500px", maxHeight: "500px", width: "100%", height: "auto", position: "relative" };
        
        return (
            <div style={styles} className={`imageLoader`}>
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