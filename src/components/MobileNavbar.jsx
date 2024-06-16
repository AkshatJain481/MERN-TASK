import React, {useState} from 'react'
import SignUp from './sub_components/SignUp';
function MobileNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <div className='max-sm:flex h-10 sm:hidden space-x-2 justify-end items-center px-4'>
          
           <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsModalOpen(true)}>
            <path d="M0 -0.00012207H10V9.99988H0V-0.00012207Z" fill="#868E96"/>
            </svg>

            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsModalOpen(true)}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.99988C7.76142 9.99988 10 7.7613 10 4.99988C10 2.23845 7.76142 -0.00012207 5 -0.00012207C2.23858 -0.00012207 0 2.23845 0 4.99988C0 7.7613 2.23858 9.99988 5 9.99988Z" fill="#868E96"/>
            </svg>

            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsModalOpen(true)}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96"/>
            </svg>

          
        </div>
        {isModalOpen && <SignUp onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default MobileNavbar