import React from 'react';
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

  return(
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-pink-600 hidden lg:flex'>
        <div className='bg-zinc-900 h-[15%] rounded flex flex-col justify-around'>

            {/* Home and Search images */}
            <div onClick={() =>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt = ""/>
                <p className='font-bold'>Home</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt = ""/>
                <p className='font-bold'>Search</p>
            </div>

        </div>

        <div className='bg-zinc-800 h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Music</p>
                </div>

                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>

            <div className='bg-zinc-700 p-4 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create A Playlist</h1>
                <p className='font-light'>Start Below</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-pink-600 rounded-full mt-4'>Create</button>
            </div>

            <div className='bg-zinc-700 p-4 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1>Discover New Podcasts</h1>
                <p className='font-light'>We'll Update You With New Episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-pink-600 rounded-full mt-4'>Discover</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar;