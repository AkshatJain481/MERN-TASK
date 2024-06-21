import React, {useState, useEffect} from 'react'
import PostCard from './sub_components/PostCard'
import MeetUpCard from './sub_components/MeetUpCard'
import JobCard from './sub_components/JobCard'
import PostComponent from './sub_components/PostComponent';
import {useAuth} from '../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
function Content() {
    const [userlocation , setUserLocation] = useState('Enter Your Location');
    const {user} = useAuth();


    function onInputLocationChange(e){
        setUserLocation(e);

    }

    const [posts, setPosts] = useState([]);

  

  useEffect(() => {
    console.log(document.cookie);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      toast.error('Failed to fetch posts');
    }
  };



  


  return (
    <div className='mt-[2%] sm:mx-[13%]   flex'>
        <div className=' grid grid-row-6'>
        
        {posts.map((post) => (
          <PostComponent
            comments={post.comments}
            likes={post.likes.length}
            userId={post.user}
            postid={post._id}
            key={post._id} // Assuming each post has a unique ID
            title={post.title}
            description={post.description}
            mediaUrl={post.mediaUrl}
          />
        ))}
      </div>
      <div className='ml-[20%] max-lg:hidden'>
      <div class="flex items-center space-x-[105px] pb-2 border-b-2 min-w-[244px] ">
        <div className='flex items-center'>
        <svg class="w-4 h-4  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span class="">
            <input type="text"
            value={userlocation}
            onChange={(e) => onInputLocationChange(e.target.value)}
                />
         </span>

         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_848)">
            <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_1_848">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        
            
        

        </div>

        <div className='flex pt-8 space-x-2'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clip-path="url(#clip0_1_853)">
            <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_1_853">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <div className='text-[12px] text-gray-400 max-w-[220px]'> 
            Your location will help us serve better and extend a personalised experience.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Content