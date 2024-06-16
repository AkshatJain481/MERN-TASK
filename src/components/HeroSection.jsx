import React from 'react'

function HeroSection() {
  return (
    <div className=''>
        <div className=' bg-center relative  flex align-center justify-center bg-cover h-[440px] bg-[url("https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRbtwE7Jsi-MB~ks4XAT-wLWPYwDJ66bIroDj3OUL46o2t2K4mdN73YyF~6Bn9RvO4S2D~dD57Y3EgOte2RXsaYu47RTAxGTZKhxN2szq~ClAtHM-Nc~Xy86s~yhFxiwuGYZ-Ekk9omjwvhNyXP0civqhJaLeHhF5nqo-B8ux3AYCCgV3-ZDoBMgQS6L3rOJpCvoNjsK9WJV7eedYFl~ClyJ28vrQb~yuL0FnM5mpMunEzxcm5Yt-ZVfTePNkZHZpw~ezcPa3Pc2hPPrMmDZfjTvx0lSWM~CX3SJGGotaf4byYNOc41UizFetDeEllvy-Y1LVAPVMEImPpAJvrtODQ__")]'>
        <div className=' bg-black bg-opacity-50 h-full  w-full'>
            <div className='p-8 sm:hidden flex items-center justify-between'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
                </svg>

                <button className='bg-transparent text-white border-2 border-white rounded-md p-2'>
                    Join Group
                </button>
            </div>
        <div className=' text-[#ffffff] absolute bottom-[24%] sm:bottom-[18%] left-[5%] sm:left-[13%] '>

            <h1 className='text-[18px] sm:text-[36px] font-bold'> Computer Engineering</h1>
            <h5 className='text-[10px] sm:text-[18px]'>142,765 Computer Engineers follow this</h5>
        </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection