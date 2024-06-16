import React, {useState, useEffect} from 'react'
import PostCard from './sub_components/PostCard'
import MeetUpCard from './sub_components/MeetUpCard'
import JobCard from './sub_components/JobCard'

function Content() {
    const [userlocation , setUserLocation] = useState('Enter Your Location');

    function onInputLocationChange(e){
        setUserLocation(e);

    }


  return (
    <div className='mt-[2%] sm:mx-[13%]   flex'>
        <div className=' grid grid-row-6'>
        <PostCard  title="What if famous brands had regular fonts? Meet RegulaBrands!"
        author="Sarthak Kamra"
        image="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AI96XbEM9G2nQUo-8USJmmBj2pUlj8V3sWG3YrYi3s3BGjFiUVMJ6cGqqkcZwxAZRfcXsOPTCv4yEHY84irTbgZiUK7G06xelQncLxvF-YGFKSvs-Fz5wqku9jXDrmJk5aMXI3DBRdCGZIqGXgpcvoR~lFlu1e8h-KTIGKPTrDVs0MVXGoobchz6NW7NLDOv5q68kCMZ5mgAKrzXXD3mS8uGepF0RVQwHcirt1KKSAi49GjtN9kT08h~D43-adfTpTqRU1eb22nevEDPdMpw2axYRAJGq4k-76egS5z06m6ogRtMwfUhz8CO5XqWGunnLuAVjqz8WNQ4hDDNWt2UGA__"
        content="I've worked in UX for the better part of a decade. From now on, I plan to rei..."
        type={'✍️ Article'}
        authorImg={'https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdzbtHS0xYM~P0lnGXpvz7rWZsn~wFLjyulnJCsrLf2YouuGcwi16VPWtbvk2bW5V10lUNmrhAK3ckdX2yogkX2mIJYrbCGBT3C95DSjGpu7QfNaiGVLbwuLUWhtY13IRt6zNINlp17F2cTFg8dIXU~R4Yfymey31l3MH6aZwCSrEyPkib~DxvtgDi~TT2401unRBGqb-oKj7LPphwB0zTKMYXjyBdbWm~p8QzezKMyAJmseD1SpVYUmYA2ILY1Gk~ibNfObZTJOVb5lWZEdhu7YU7kgCkYMOHdFJAjBtMsVBqdvOXrTFfG1nxMEmZcQnPwICIHNK3V4heO0VlwVvA__'}
      />
      <PostCard  title="Tax Benefits for Investment under National Pension Scheme launched by Government"
        author="Sarah West"
        image="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W83tmxj4TJMo5r3JLp~ew1JFxM2wpaKvXttG2MfutexxDtnGWkUKrconwFWLnUYAYv8hO5zqghbowoJVXfm9AX3qGUTt6eoz3Ah2ppvzOvmliCoE0K2QLeLU0Z0H3urtMuIBaQkdqIHVS8Eltca409~pzwjZVTn1PeFM-O8efwljfMHqdopjW3-Ixuj-aXYkjqAxjZDRWPTJXuFkttnGSx9WXxdpPcdDy8tGVkWFVK1k2Ty9~-u6HNb-pqYRIcUf7ToCX-4cDlg1IXZqTN3IOqU5EzS9p4wbTijg-8OILeI52oiCJ7C0RRAg1deWik6OJ3rwyFJzdt9jl2FSraqSNw__"
        content="I've worked in UX for the better part of a decade. From now on, I plan to rei..."
        type={'🔬️ Education'}
        authorImg={'https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNrZ57HOk5k5afFH2GLMkx3Y-i4lIVa2qudb5l7R9lUM~~ms2WJewGyzVt2TbRBYsroxwT~u7uJSKGi1GjBta54wnU9HxQHWZCVzTfzEvG9FcXeOChLzAv1Uoq7gCudmHjz8K7IigjPjlxMDrXdTRjg-9clTAAWmQk5ZchFjyX2udFcb65ELWBbO8zqvtnAOn4d7W7n5CPyTpNmQ3nbxzm1Y7G9YYNinAntUyUVOHvH6lZJ60wCkcmfaI0Q5vwNstfUXVHOwznKV3F1vHXlqSFnc7xONHHQ5e4nUERxoXNRbu--C~2REH78ShgdF9JOiY6a6t4lv~j9X16cL9sxNVQ__'}
      />
      <MeetUpCard 
      image={'https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoTuoKXN9AS8XTbmTOzof2D~2fuMTDlmTwjWfnngUqqNAGwzEtE8JmwpKWSPMJvD8hVSafQSg0LOdAHv1En5gSfeHl8aUp6IKyOsi0boxjqTjxS64bkzCLygWJ97tYFTdj3-GfglxSJJwgVWDW3i0sgQkGaAsG3pSMjGpSjNDqFFHjQtJPE8OgcAqI7yO1gxen-qXGhAZR72AC6Fc8PmxTU~LhdoUY6xrvNzD3-j7tkKad6akC1lHoaYB5yDjivcQJgpIITXgR8y6tfTf6JhUk9m~tuUUt-~VTSDQ7U-sOOuoprfbHHD9uYlorZxEWJ8HGEqPmUqVvyg2pxYWANdNQ__'}
        type={'🗓️ Meetup'}
        title={"Finance & Investment Elite Social Mixer @Lujiazui"}
        date={'Fri, 12 Oct, 2018'}
        location={'Ahmedabad, India'}   
        authorImg={'https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PoqF96KzdVES8JvPASuGUOInrwlT8Rv40V4ZtzbwXWLZwsbjJHKp0E29xZrhiY1y1zCd-TncVAiKsIT12wLIeGqI4oCBuRKs6dMqdBGSHK13i0axnuBISTMFGs~~dySqEDpydj~IDxk6zqIZGOeGl6clHw~42fBk2L8TIUwkMtVqkpHxqXxmYMa4Uve35ZLkO390o0QmsPRbZpZ-31rV3WBl4S1Otj6Du1J0fmKd5yJSFILfC5Qnjktme8SohdQO8bQTqPQfn54m4zeP9y7OZ8GM3VWILmqn3EuFB-o4ucOgd7YyVaCAJq9Q9EYSlAbomhqupVwpq1GZhECSB-0XjQ__'}
        author={"Ronal Jones"}
        />
        <JobCard 
        title={"Software Developer"}
        type={"💼️ Job"}
        company={"Innovaccer Analytics Private Ltd."}
        location={"Noida, India"}
        author={"Joseph Gray"}
        authorImg={"https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsEHSzyt4wYw7ptWWaMAzMgdXhKBQ1639EW4vFNz8qvkQriMDxN9-r13uHnnrlcOIvzLfIy9m3rfdxuJZUsXgUuvKQ7HuTg1aZLRLjt1J1NR7rhCwGSCTA0wnD0my2RRboMuadNltmVye1bX3IxOOxYwPjWLQPUPZH2I1LgjbGMHegrHrwvtf4Tnpfqpea1a9s5CVNjUrNsJxeZNQkq--flCe0O5iPf6Xx3-02iloN7X5Zo~wgtknpmNFpEKDUMY3IxQvxbqFlDFN7W6rQ9Im7Fch~cZQdN4fcbL~oVkOIDEt4UKIB4TyxyoJWk5-sQdj32k3vqcViHEsxkwjrvAeA__"}
        />
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