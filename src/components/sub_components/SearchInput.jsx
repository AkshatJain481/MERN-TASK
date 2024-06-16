import React from 'react';


const SearchInput = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  size-4 text-[#7A7A7A]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

      <input
        type="text"
        placeholder="Search for your favorite groups in ATG"
        className="ml-2 bg-gray-100 outline-none max-sm:w-[60px] sm:max-md:w-[120px] lg:w-[280px] xl:w-[340px] placeholder:text-[#5C5C5C] placeholder:text-[14px] placeholder-truncate truncate"
      />
      
    </div>
  );
};

export default SearchInput;
