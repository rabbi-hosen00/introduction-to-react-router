import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({ post }) => {
    // eslint-disable-next-line react/prop-types
    const { id, title } = post;
    const navigate = useNavigate();


    const postStyle = {
        border: '2px solid green',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDetails = () =>{
        navigate(`/post/${id}`);
    }



    return (
        <div style={postStyle}>
            <h4> Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}> Click to see details btn</button>
        </div>
    );
};

export default Post;