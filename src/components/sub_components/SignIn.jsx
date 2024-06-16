import React, {useState} from 'react'
import designImage from '../../Images/Signup.png';


function SignIn({onClose , openModal}) {
    
  
  const facebookLogo = 'https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZdaqYj40GA4jv3EhToholknIWUtv8HxXMqxYOdS4OISvY6uLq2t8BhpMJt2PANl1js4wDfkB4VaKbFENKQu2FSWkANDGZEgkRpyuBOk-LuL2zvVdlAIsGrlBCZxk8JPfaEQ8a9mIC3zJscbXG66e5VPvyQ3LLbiu9zcOVaoMbBVy9I01dhhTkHCenDioEqOpglg-TykJHXFPBOkHX98SR4ClboNzRVUlu8eotyP9RQZ7h4y4cbMBSm79VdvaVRSsLCWfzrHKT7BwE1KYGxEMwTZo1iKCSLrKGXb391CC163TNSWSxuy~UMr0Tep9TnbbwwjvieMYxdlYIuWUeY4sw__';
  const [passwordVisible, setPasswordVisible] = useState(false);
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  
    return (
      

          <>
       
      <div className="fixed inset-0      z-50 max-lg:hidden">
        <div className=' my-auto grid place-items-center h-full '>
      
          <div className='flex justify-center  '>
          
      
        <div className="bg-white  rounded-lg shadow-lg max-w-[740px] w-full relative ">
        
        <div className="text-center ">
            <p className="bg-[#EFFFF4] text-[#008A45] font-semibold py-4  text-[14px] rounded-t-md">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼 </p>
          </div>
          <div className='flex justify-between items-center w-full px-8 pt-6 '>
          <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
          
            <p className="text-sm text-gray-600">Don't have an account? <button onClick={openModal} className="text-blue-600 ">Create new for free!</button></p>
            </div>

            <div className='flex items-center px-8 pb-8 '>
            
            <div className='max-w-[320px]'>
          
          
          <div className=" flex">
            
          </div>
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border bg-[#F7F8FA]" />
          
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border bg-[#F7F8FA] " />
          <button className="w-full bg-blue-500 text-white py-2 rounded-full mt-6">Sign In</button>
          <div className=" grid gird-row-2 space-y-2 mt-8">
            <button className="flex items-center justify-center  border py-2 rounded ">
              <img src={facebookLogo} alt="Facebook Logo" className="w-4 h-4 mr-2" />
              Sign up with Facebook
            </button>
            <button className="flex items-center justify-center border py-2 rounded">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                <g clip-path="url(#clip0_1_2217)">
                <path d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z" fill="#FBBB00"/>
                <path d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z" fill="#518EF8"/>
                <path d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z" fill="#28B446"/>
                <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336"/>
                </g>
                <defs>
                <clipPath id="clip0_1_2217">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                Sign up with Google
            </button>
            <p className='text-center pt-5  font-bold'>Forgot Password?</p>
            </div>
          </div>
            <div className=''>
          <div className="">
            <img src={designImage} alt="Design" className="w-[320px] h-[320px]" />
          </div>
          <p className="text-[11px] invisible text-gray-600 mt-4 text-center px-4">By signing up, you agree to our Terms & conditions, Privacy policy</p>

        </div>
        </div>
        </div>
        <button 
            className= " z-50 font-bold ml-4 -mt-10  text-gray-600 rounded-full w-6 h-6 bg-[#FFFFFF] hover:text-gray-800" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        </div>
      </div>






      <div className="fixed inset-0 z-50 flex items-center justify-center  lg:hidden   ">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full flex flex-col max-[420px]:self-end max-[420px]:-mb-4 pb-[105px]  ">
        <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-semibold text-center">Welcome Back!</h2>
        <button 
          className=" " 
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529"/>
          </svg>

        </button>
        </div>

        <div className="mt-4 ">
          
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border bg-[#F7F8FA] " />
          <div className="relative">
            <input id="password" type={passwordVisible ? 'text' : 'password'} placeholder="Password" className="w-full px-4 py-2 border bg-[#F7F8FA] " />
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility}>
            {passwordVisible ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>):(<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 8C1.82002 5.07333 4.66669 3 8.00002 3C11.3334 3 14.18 5.07333 15.3334 8C14.18 10.9267 11.3334 13 8.00002 13C4.66669 13 1.82002 10.9267 0.666687 8ZM13.88 8C12.78 5.75333 10.5267 4.33333 8.00002 4.33333C5.47336 4.33333 3.22002 5.75333 2.12002 8C3.22002 10.2467 5.47336 11.6667 8.00002 11.6667C10.5267 11.6667 12.78 10.2467 13.88 8ZM8.00003 6.33333C8.92003 6.33333 9.66669 7.08 9.66669 8C9.66669 8.92 8.92003 9.66666 8.00003 9.66666C7.08003 9.66666 6.33336 8.92 6.33336 8C6.33336 7.08 7.08003 6.33333 8.00003 6.33333ZM5.00002 8C5.00002 6.34667 6.34668 5 8.00002 5C9.65335 5 11 6.34667 11 8C11 9.65333 9.65335 11 8.00002 11C6.34668 11 5.00002 9.65333 5.00002 8Z" fill="#8A8A8A"/>
              </svg>)}
            </span>
          </div>
          <div className="flex items-center justify-between mt-6">
          <button className=" bg-blue-500 w-1/2 text-white py-3 text-[13px] px-8 rounded-full">Sign In</button>
          <div className="flex justify-center  underline ">
            <span className="">or,</span>
            <button onClick={openModal} className="ml-1  font-medium">Create Account</button>
          </div>
          </div>
          <button className="flex items-center justify-center w-full border py-2 rounded mt-4">
            <img src={facebookLogo} alt="Facebook Logo" className="w-6 h-6 mr-2" />
            Sign up with Facebook
          </button>
          <button className="flex items-center justify-center w-full border py-2 rounded mt-2">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                <g clip-path="url(#clip0_1_2217)">
                <path d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z" fill="#FBBB00"/>
                <path d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z" fill="#518EF8"/>
                <path d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z" fill="#28B446"/>
                <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336"/>
                </g>
                <defs>
                <clipPath id="clip0_1_2217">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            Sign up with Google
          </button>
          <p className='text-center font-semibold mt-6'>Forgot Password?</p>
        </div>
      </div>
    </div>
      </>
    );
  }

export default SignIn;