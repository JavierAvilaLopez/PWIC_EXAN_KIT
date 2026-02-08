import React, {useEffect, useState} from "react";
import {getPostsWithAxios} from "./PostsService.js";

// Carga usuarios desde el servicio y muestra tarjetas con Bootstrap.
const PostCards = () => {
    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [initPost, setinitPost] = useState(0);
    const [finalPost, setfinalPost] = useState(10);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPostsWithAxios();
                setposts(data.slice(initPost, finalPost));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="card p-3 shadow-sm">
            {loading && <p className="text-muted">Cargando posts...</p>}
            {error && <p className="text-danger">{error}</p>}
            <div className="row g-3">
                {posts.map((post) => (
                    <div className="col-md-6" key={post.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-warning py-2 m-auto" onClick={() => setinitPost(initPost +1) && setfinalPost(finalPost + 1)}>
                    Rotar Post
                </button>
            </div>

        </div>
    );
};

export default PostCards;
