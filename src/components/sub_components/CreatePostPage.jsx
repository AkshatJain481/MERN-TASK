import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { toast } from 'react-toastify';

function CreatePostPage({ handlePostModal, postData }) {
    const [title, setTitle] = useState(postData ? postData.title : '');
    const [description, setDescription] = useState(postData ? postData.description : '');
    const [mediaUrl, setMediaUrl] = useState(postData ? postData.mediaUrl : '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if(user){
            const token = localStorage.getItem('token');
            let response;
            if (postData) {
                // Update existing post
                response = await axios.put(
                    `http://localhost:5000/posts/${postData._id}`,
                    { title, description, mediaUrl , userId: user._id},
                    { headers: { Authorization: `Bearer ${token}` } }
                    
                );
                console.log(response);
                if(response.data === ""){
                    toast.error('You are not authorized to update this post!!');
                }
                else{
                    toast.success('Post updated successfully');
                }
            } else {
                // Create new post
                response = await axios.post(
                    'http://localhost:5000/posts',
                    { userId: user._id, title, description, mediaUrl },
                    { headers: { Authorization: `Bearer ${token}` } }

                );
                toast.success('Post created successfully');
            }
        }
        else{
            toast.error('Please login to create or edit post');
        }
            handlePostModal();
            // Reload the page after 2 seconds
            setTimeout(() => { window.location.reload() }, 2000);
        } catch (error) {
            alert('Failed to save post');
            console.error('Error saving post:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md z-50">
                <h2 className="text-xl font-bold mb-4">{postData ? 'Update' : 'Create'} Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Media URL</label>
                        <input
                            type="url"
                            value={mediaUrl}
                            onChange={(e) => setMediaUrl(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handlePostModal}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePostPage;
