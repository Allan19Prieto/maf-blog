import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
    // Aquí irán las fotos de la galería
    return (
        <div>
            <h2>Galería</h2>
            <Link to="/post/1">Ver publicación</Link>
        </div>
    );
}

export default Gallery;