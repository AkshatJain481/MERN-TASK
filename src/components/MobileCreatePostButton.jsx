import React, { useState } from 'react'
import CreatePostPage from './sub_components/CreatePostPage'
function MobileCreatePostButton() {

  const [showPostModal, setShowPostModal] = useState(false);

    const handlePostModal = () => {
        setShowPostModal(!showPostModal);
    };


  return (

    <div className='max-sm:fixed bottom-0 right-0  mb-4 mr-4 sm:hidden z-50'>
    {showPostModal && <CreatePostPage handlePostModal={handlePostModal} />}
            <div className=' h-[54px] w-[54px] rounded-full flex items-center justify-center cursor-pointer ' onClick={handlePostModal} style={{background: 'linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM2.99878 17.25L14.0588 6.19L17.8088 9.94L6.74878 21H2.99878V17.25Z" fill="white"/>
            </svg>

            </div>
    </div>
  )
}

export default MobileCreatePostButton