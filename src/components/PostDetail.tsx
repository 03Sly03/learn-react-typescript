import { Link } from "react-router-dom";
import { PostData } from "../interfaces";
import '../styles/postDetail.css';

interface PostDetailProps {
    onePost: PostData | null;
  }
  
const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
    return (
        <div className="post">
            <h2>{onePost?.id}: {onePost?.title}</h2>
            <p>{onePost?.body}</p>
            <Link to="/">Page principale</Link>
        </div>
    )
}

export default PostDetail