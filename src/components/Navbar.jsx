import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'
function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex items-center w-full screen-max-width'>
            <img src={appleImg} alt="apple" width={14} height={18} />

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {
                    navLists.map((nav)=>(
                        <div key={nav} className='px-5 text-sm cursor-pointer transition-all text-gray hover:text-white'>
                            {nav}
                        </div>
                    ))
                }
            </div>

            <div className='flex gap-7 max-sm:justify-end max-sm:flex-1 items-baseline'>
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="search" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar