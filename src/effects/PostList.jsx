import React, { useEffect, useState } from "react";

// Carga posts desde una API al montar el componente.
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!response.ok) {
          throw new Error("No se pudieron cargar los posts.");
        }
        const data = await response.json();
        setPosts(data);
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
      <h4 className="mb-2">Posts recientes</h4>
      {loading && <p className="text-muted">Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group list-group-flush">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            <strong>{post.title}</strong>
            <p className="mb-0 text-muted">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
