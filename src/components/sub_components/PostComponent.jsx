import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { toast } from 'react-toastify';
import CreatePostPage from './CreatePostPage';
const PostComponent = ({key, postid, title, description, mediaUrl, likes, comments , userId }) => {
  const { user } = useAuth();
  const [isVideo, setIsVideo] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [currentComments, setCurrentComments] = useState(comments || []);
  const [newComment, setNewComment] = useState('');
  const [UserData, setUser] = useState(null);
  const [Editmodel, setEditModel] = useState(false);
  const existingPostData = { title, description, mediaUrl , _id: postid};
  useEffect(() =>{ 
    const fetchData = async () => {
    const videoExtensions = ['mp4', 'webm', 'ogg', 'mov'];
    const urlExtension = mediaUrl.split('.').pop().toLowerCase();
    setIsVideo(videoExtensions.includes(urlExtension));
    
    if (userId && userId._id) {
      const USERID = userId._id;
      try {
        const response = await axios.get(`http://localhost:5000/users?id=${USERID}`);
        setUser(response.data);
        console.log(response);
        console.log(USERID);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
  };


  fetchData();
}, []);

  const handleLikePost = async () => {
    try {
      if (user) {
       const CurrentuserId = user._id;
      const response = await axios.post(`http://localhost:5000/posts/${postid}/like`, { CurrentuserId });
      setCurrentLikes(response.data.length);
     }
     else{
      toast.error('Please login to like post');
     } // Increment likes count locally
    } catch (error) {
      alert('Failed to like post');
      console.error('Error liking post:', error);
    }
  };

  const handleUpdatePost = async () => {

    setEditModel(!Editmodel);
  }
  
  const handleDeletePost = async () => {
    try {
      if (user) { 
      const UserId = user._id;
      console.log(UserId);
      await axios.delete(`http://localhost:5000/posts/${postid}`,{params: { UserId }});
      toast.success('Post deleted successfully');
      setTimeout( ()=>{window.location.reload()}  , 2000)
      } else {
        toast.error('Please login to delete post');
      }
    } catch (error) {
      toast.error('You are not authorized to delete this post!!');
    }
  };

 const handleCommentPost = async (e) => {
  e.preventDefault();
  try {
    if (user) { 
      const CommentuserId = user._id;
      const response = await axios.post(`http://localhost:5000/posts/${postid}/comment`, { CommentuserId, text: newComment });
      const newCommentData = response.data; // Assuming response.data contains the new comment
      console.log(newCommentData);
      setCurrentComments([...currentComments, newCommentData]); // Append new comment to existing comments
      setNewComment(''); // Clear the comment input field
      window.location.reload();
    } else {
      toast.error('Please login to comment');
    }
  } catch (error) {
    alert('Failed to comment on post');
  }
};

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 " key={key}>
      {Editmodel ? (<CreatePostPage handlePostModal={handleUpdatePost} postData={existingPostData}  />) : null}
      <div className="relative">
        {isVideo ? (
          <video
            src={mediaUrl}
            controls
            className="w-full h-64 object-cover"
          ></video>
        ) : (
          <img src={mediaUrl} alt="Post Media" className="w-full h-64 object-cover -z-20 " />
        )}
      </div>
      <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <h3 className="text-xl font-bold mb-2">Posted by: {UserData?.username}</h3>
        
        <p className="text-gray-800 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button 
              className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none" 
              onClick={handleLikePost}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{currentLikes}</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none ml-4">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{currentComments.length}</span>
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={handleUpdatePost} >
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={handleDeletePost}>
            Delete
          </button>
        </div>
        <form onSubmit={handleCommentPost}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Add a comment..."
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Comment
          </button>
        </form>
        <div className="mt-4">
          <h5 className='mb-4'>Comments:</h5>
          {currentComments.map((comment, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{comment?.user?.username}</span>: {comment?.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
