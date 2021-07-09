import React from 'react'
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'

function LoginPage() {
    return (
        <div className='animation-container'>
            <div className='btn-container'>
                <button className='btn google'> <FaGoogle /> SignIn With Google</button>
                 <button className='btn facebook'> <FaFacebook /> SignIn With Facebook</button>
            </div>
            <div className='icon-wrapper'>
                
                   <div className='icon'>  <FaFacebook /> </div>
                   <div className='icon'>  <FaGoogle /> </div>
                   <div className='icon'> <FaTwitter/> </div>
                    <div className='icon'> <FaFacebook /> </div>
                    <div className='icon'> <FaGoogle /> </div>
                    <div className='icon'> <FaTwitter/> </div>

            </div>
        </div>
    )
}

export default LoginPage
