import React from 'react'
import "./userInfo.css"
import { useUserStore } from '../../../lib/userStore'

const Userinfo=()=> {

  // const {currentUser}  = useUserStore();
  const {currentUser} = useUserStore();

  return (
    <div className='userInfo'>
     <div className='user'> 
     <img src= {currentUser.avatar || "./usericon.png"} alt="" />
     {/* <img src=  "./avatar.png" alt="" /> */}
    {console.log(currentUser.avatar)}
     <h2>{currentUser.username}</h2>
     </div>
     <div className='icons'> 
     <img src="./more.png" alt="" />
     <img src="./video.png" alt="" />
     <img src="./edit.png" alt="" />

     </div>

    </div>
  )
}

export default Userinfo

