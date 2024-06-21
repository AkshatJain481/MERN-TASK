import React, { useState } from 'react';
import CreatePostPage from './sub_components/CreatePostPage';

function PostSectionNavbar() {
    const [activeTab, setActiveTab] = useState('All Posts(32)');
    const [showPostModal, setShowPostModal] = useState(false);

    const handlePostModal = () => {
        setShowPostModal(!showPostModal);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabs = ['All Posts(32)', 'Article', 'Event', 'Education', 'Job'];

    return (
        <div className=' mt-10 sm:mx-[13%] mx-[4%]'>
            {showPostModal && <CreatePostPage handlePostModal={handlePostModal} />}
            <nav className="flex sm:border-b justify-between">
                <div>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 transition-colors duration-300 max-lg:hidden ${
                                activeTab === tab
                                    ? 'border-b-2 border-black pb-4'
                                    : 'border-b border-transparent pb-4 text-[#8A8A8A]'
                            }`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                    <button className='lg:hidden py-2 px-4 pb-4'>
                        Posts(32)
                    </button>
                </div>
                <div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-300 flex space-x-2" onClick={handlePostModal}>
                            <span className='max-sm:hidden'>Write a Post</span>
                            <span className=' sm:hidden'>Filter:All</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_839)">
                                    <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_839">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 flex items-center space-x-2 max-sm:hidden">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_859)">
                                    <path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_859">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Join Group</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default PostSectionNavbar;
