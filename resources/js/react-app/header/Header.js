import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <div className="logo">Crypto application</div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
        
            </nav>
        </>
    )
}

export default Header;