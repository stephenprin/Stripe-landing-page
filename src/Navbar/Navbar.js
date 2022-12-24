import React from 'react'
import logo from '../assets/images/logo.svg'
import { AiOutlineMenuUnfold} from 'react-icons/ai'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const { openSidebar,closeSidebar,openSubmenu, closeSubmenu,} = useGlobalContext()
   
    return (
        <nav className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                   
                    <img src={logo} alt="stripe" className='nav-logo' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <AiOutlineMenuUnfold />
                    </button>
                </div>
                    <ul className='nav-links'>
                        <li><button className='link-btn'>Products</button></li>
                        <li><button className='link-btn'>Developers</button></li>
                        <li><button className='link-btn'>Company</button></li>
                        <li><button className='link-btn'>Resources</button></li>
                    </ul>
                    <button className='btn signin-btn'>Sign in</button>
            
            </div>
        </nav>
  )
}

export default Navbar