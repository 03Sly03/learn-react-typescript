import React from 'react'
import { useNavigate } from 'react-router-dom';
import {PostData} from '../interfaces';

/* STYLES */
import '../styles/postsList.css';

interface PostsListProps {
  allPosts: PostData[] | null;
}

const PostList: React.FC<PostsListProps> = ({ allPosts }) => {
  const navigate = useNavigate();
  return (
    <div>
        <ul className='posts'>
          {allPosts?.map(post => (
            <li key={post.id}>
              <h2>{post.id}: {post.title}</h2>
              <p className='read-article' onClick={() => navigate(`/${post.id}`)}>Lire l'article</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default PostList