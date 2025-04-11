import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

  return (
    <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <div onClick={()=>{navigate('/')}} class=" cursor-pointer text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Game</div>

        <div onClick={()=>{navigate('/history')}} class="cursor-pointer border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">History</div>
        
    </div>
</nav>
  )
}
