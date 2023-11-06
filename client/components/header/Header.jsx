import { BiSearchAlt } from 'react-icons/bi'
import ScrollBar from './ScrollBar'

const Header = () => {
  return(
    <div className='bg-black sticky top-0 z-10 py-2 max-w-full px-2 md:px-8 lg:px-12 shadow-white text-primary'>
      <div className='flex justify-between grid grid-cols-2 '>
        <div className='text-2xl font-sans font-extrabold'>
          LOGO
        </div>
        <form className='flex my-auto relative'>
          <input 
            type="search"
            className='w-full bg-transparent border-primary px-2 outline-0 border-2 rounded-sm'
          />
          <button className='absolute top-1 right-1 cursor-pointer'><BiSearchAlt /></button>
        </form>
      </div>
    </div>
  )
}

export default Header;