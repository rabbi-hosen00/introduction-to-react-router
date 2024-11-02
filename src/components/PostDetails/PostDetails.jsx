import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const nevigate = useNavigate();
    const { id, title, body } = post;

  console.log(postId)

    const handleGoBack = () => {
        nevigate(-1)
    }

    return (
        <div>
            <h3>Post Details about:{id} </h3>
            <p>title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;