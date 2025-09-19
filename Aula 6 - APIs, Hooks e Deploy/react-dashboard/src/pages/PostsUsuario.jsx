import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PostsUsuario() {

    const parametros = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, []);

    return (
        <div>
            <h1>Posts Usuario</h1>

            {post.map((pegaItem) => (
                <div className="bg-purple-500 text-white gap-2 m-4">
                    <h3>{pegaItem.title}:</h3>
                    <p>{pegaItem.body}</p>
                </div>
            ))}
        </div>
    )
}