import React, { useState, useRef, useEffect } from 'react';

function MeetUpCard({image, type, title, date, authorImg, author, location }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white rounded shadow  border border-[#E0E0E0] rounded-md inline-block mt-4">
      <div className='w-full h-[120px] sm:h-[220px] mb-4'>
      <img src={image} alt="Card Image" className="w-full h-full object-cover rounded-t-md" />
      </div>
      <div className='px-4 py-2'>

            <div className=' font-semibold '>{type}</div>
            <div className='flex justify-between'>
              <h2 className="text-xl font-bold py-2 max-w-[570px]">{title}</h2>
              <button className='w-10 h-8 hover:bg-gray-400 flex items-center justify-center rounded-[4px] ml-[20px]' onClick={toggleDropdown}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z" fill="black"/>
                </svg>
                {isOpen && (
                <div
                  ref={dropdownRef}
                  className="z-20 absolute mt-[170px] bg-white shadow-xl rounded-lg py-2 w-[200px] mr-[170px]"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Report
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Edit
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Save
                  </a>
                </div>
              )}
              </button>
            </div>
            <div className='flex items-center space-x-12'>
                <div className='flex items-center space-x-2'>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black"/>
                </svg>
                <span className='text-[14px] font-bold'>{date}</span>
                </div>

                <div className='flex items-center space-x-2'>
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z" fill="black"/>
                <path d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z" fill="black"/>
                </svg>
                <span className='text-[14px] font-bold'>{location}</span>
                </div>

            </div>

            <div className='my-4'>
                <button className='w-full font-semibold  text-red-500 p-2 border border-[#A9AEB8] rounded-lg'>
                    Visit Website
                </button>
            </div>
        <div className='flex items-center justify-between mb-4'>

            <div className='flex items-center space-x-4 mt-4'>
                <div className='w-12 h-12 rounded-full'>
                <img src={authorImg} alt="Author" className="w-full h-full object-cover rounded-full " />
                </div>
                <div>
                <p className='font-bold'>{author}</p>
                <p className=' sm:hidden '>1.4k views</p>
                </div>
            </div>
           
            <div className='flex items-center space-x-10 px-2'> 
                <div className='flex items-center space-x-2  max-sm:hidden'>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="icon/action/visibility_24px">
                      <path id="icon/action/visibility_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252"/>
                      </g>
                  </svg>

                  <p className='text-[14px]'>1.4k views</p> 
                </div>
                <div className=' '>
                  <button className='bg-gray-200 p-2 flex items-center justify-center rounded-sm space-x-2'>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D"/>
                    </svg>
                    <span className='sm:hidden'>Share</span>
                  </button>
                </div>
            </div>

      </div>
      </div>
    </div>
  )
}

export default MeetUpCard