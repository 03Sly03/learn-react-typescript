import { useEffect, useState } from 'react';
import PostList from '../components/PostList';

import {PostData} from '../interfaces';

/* STYLES */
import '../styles/posts.css';

const Posts: React.FC = () => {

  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5);
  
  const localStorageOrDefault = () => localStorage.getItem('number') || numberOfPosts;
  const localOrDefault = localStorageOrDefault();

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrDefault}`);
      const data: PostData[] = await response.json();
      setAllPosts(data);
    }
    getPosts();
  }, [localOrDefault])

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPosts(+e.target.value);
    localStorage.setItem('number', e.target.value);
  }

  return (
    <div className="post-container">
        <h1>Page principale</h1>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="posts">Nombre de publications: {localOrDefault}</label>
            <input type="range" min={1} max={20} onChange={onChange} defaultValue={localOrDefault} />
            <PostList allPosts = {allPosts}/>
        </div>
    </div>
  )
}

export default Posts