import React from 'react'
import logo from '/react/learning/src/images/logo/amazonlogo.png'
import { IoCartOutline,IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const navigate=useNavigate();
    const handleSignIn=()=>{
        navigate('/Login')
    }
  return (
    <div className='HeaderContainer'>
        <div className='HeaderContent'>
                <div className='left-portion'>
                    <img src={logo} className='headerlogo' alt='logo'></img>
                    
                </div>
                <div className='middle-portion'>
                <div class="input-group ddddd">
                    <span class="input-group-text">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                    <ul class="dropdown-menu hhh">
                        <li><a class="dropdown-item" href="#">Books</a></li>
                        <li><a class="dropdown-item" href="#">Cars</a></li>
                        <li><a class="dropdown-item" href="#">Mobile Acceries</a></li>
                        <li><a class="dropdown-item" href="#">Gold</a></li>
                    </ul>
                    </span>
                    <input type="text" class="form-control" />
                    <span class="input-group-text serachbtn"><IoSearchSharp className='searchicon'/></span>
                </div>

                </div>
                <div className='right-portion'>
                    <div className='headeraccounts'>
                        <p>Hello,Sign In<h6>Accounts & Lists</h6></p>
                        
                    </div>
                    <div className='headerReturnorders'>
                        <p>Return<h6> & Orders</h6></p>
                        
                    </div>
                    <div className='headerCart'>
                        
                        <IoCartOutline className='carticon'/>
                    
                    </div>
                    <div className='signIn'>
                        <button type="button" class="btn btn-primary" onClick={handleSignIn}>SignIn</button>
                    </div>

                </div>
        </div>
    </div>
  )
}
