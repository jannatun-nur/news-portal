
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'

const Navbar = () => {

  const links = <>
          <Link to='/'><li className='hover:bg-white hover:text-blue-500 rounded-2xl px-4'>Home</li></Link>
          <Link to='/update'><li className='hover:bg-white hover:text-blue-500 rounded-2xl px-4'>Daily Update</li></Link>
          <Link to='/food'><li className='hover:bg-white hover:text-blue-500 rounded-2xl px-4'>Food</li></Link>
          <Link to='/life'><li className='hover:bg-white hover:text-blue-500 rounded-2xl px-4'>Life</li></Link>
          <Link to='/sport'><li className='hover:bg-white hover:text-blue-500 rounded-2xl px-4'>Sports</li></Link>
  </>
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
              lg:text-2xl md:text-xl text-xl mt-3 z-[1] p-2 shadow bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          
          {/* logo & name */}
          <div className='flex gap-1'>
            <p className='text-2xl font-bold mt-2'>Pocket</p>
            <img src={logo} className=""/>
            
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;
