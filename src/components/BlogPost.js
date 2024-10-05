import React from "react";

function BlogPost({ match }) {
    const { id } = match.params;
    // Aquí irán los detalles de la publicación
    return (
        <div>
            <h2>Publicación {id}</h2>
            <p>Detalles de la publicación...</p>
        </div>
    );
}

export default BlogPost;