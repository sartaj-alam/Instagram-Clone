import React from 'react'
import "../../styles/SideBar.css"
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

function SideBar() {
  return (
    <div className='sidebarContainer'>
        <ul>
            <li><img src="https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png"/> </li>
         <li>Home</li>
         <li>Search</li>
         <li>Explore</li>
         <li>Reels</li>
         <li>Message</li>
         <li>Notification</li>
         <li>Create</li>
         <li>Profile</li>
      </ul>
    </div>
  )
}

export default SideBar