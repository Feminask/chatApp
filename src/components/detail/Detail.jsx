// import React from 'react'
// import "./detail.css"
// import { auth } from '../../lib/firebase'

// const Detail=()=> {
//   return (
//     <div className='detail'>
//     <div className="user">
//         <img src="./avatar.png" alt="" />
//         <h2>David John</h2>
//         <p>Lorem ipsum  harum!</p>
//     </div>
//     <div className="info">
//     <div className='option'>
//             <div className="title">
//                 <span>Shared Files</span>
//                 <img src="./arrowUp.png" alt="" />
//             </div>
//         </div>

//         <div className='option'>
//             <div className="title">
//                 <span>Shared Files</span>
//                 <img src="./arrowUp.png" alt="" />
//             </div>
//         </div>

//         <div className='option'>
//             <div className="title">
//                 <span>Privacy & help</span>
//                 <img src="./arrowUp.png" alt="" />
//             </div>
//         </div>
//         <div className='option'>
//             <div className="title">
//                 <span>Shared Photos</span>
//                 <img src="./arrowDown.png" alt="" />
//             </div>
//             <div className="photos">
//                 <div className="photoItem">
//                     <div className="photoDetail">
//                     <img src="https://i.postimg.cc/HsfmPvzM/pexels-moose-photos-170195-1037999.jpg" alt="" />
//                     <span>photo_2024_2.png</span>
//                     </div>
//                     <img src="./download.png" alt="" className='icon'/>

//                 </div>
//                 <div className="photoItem">
//                     <div className="photoDetail">
//                     <img src="https://i.postimg.cc/HsfmPvzM/pexels-moose-photos-170195-1037999.jpg" alt="" />
//                     <span>photo_2024_2.png</span>
//                     </div>
//                     <img src="./download.png" alt="" className='icon'/>

//                 </div>

//                 <div className="photoItem">
//                     <div className="photoDetail">
//                     <img src="https://i.postimg.cc/HsfmPvzM/pexels-moose-photos-170195-1037999.jpg" alt="" />
//                     <span>photo_2024_2.png</span>
//                     </div>
//                     <img src="./download.png" alt="" className='icon'/>

//                 </div>
//                 <div className="photoItem">
//                     <div className="photoDetail">
//                     <img src="https://i.postimg.cc/HsfmPvzM/pexels-moose-photos-170195-1037999.jpg" alt="" />
//                     <span>photo_2024_2.png</span>
//                     </div>
//                     <img src="./download.png" alt=""className='icon' />

//                 </div>

//             </div>

//         </div>
//         <div className='option'>
//             <div className="title">
//                 <span>Shared Files</span>
//                 <img src="./arrowUp.png" alt="" />
//             </div>
//         </div>
//         <button>Block User</button>
//         <button className='logout' onClick={()=>auth.signOut()}>Logout</button>

//     </div>
//     </div>
//   )
// }

// export default Detail

import React from "react";
import "./detail.css";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

function Detail() {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;
    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./usericon.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Success is the sum of small efforts</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.postimg.cc/HsfmPvzM/pexels-moose-photos-170195-1037999.jpg" alt="" />
                <span>photo-13/05/24</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.postimg.cc/3JXYD79J/images.jpg" alt="" />
                <span>photo-23/04/24</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.postimg.cc/hGwTRNt7/pexels-cloudett-20836361.jpg" alt="" />
                <span>photo-13/04/214</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className="b4" onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? " User Blocked"
            : "Block user"}
        </button>
        <button className=" logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Detail;
