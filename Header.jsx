import React from 'react'
import "../../styles/header.css"
import SettingsIcon from '@mui/icons-material/Settings';
import SavedStatus from './SavedStatus';
function Header({ myInfo }) {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"10vh",
    width: "100%"}}>
    <div style={{display:"flex", justifyContent:"center",gap:"15vh" }}>
      <img style={{ border:"1px solid grey",width: "16vh", height: "16vh", marginTop:"20px",marginLeft:"-40px"
      ,objectFit: "cover", borderRadius: "50%" }} src={`${myInfo.profilePic}`} />
      <div>
      <div style={{height:"70px",display:"flex",gap:"40px",alignItems:"center"}}>
        <span style={{fontSize:"20px", margin:"5px"}}> {myInfo.username} </span>
        <span class="profile_header_buttons">Edit Profile </span>
        <span class="profile_header_buttons">View Archive</span>
        <span><SettingsIcon/></span>
      </div>
      <div style={{ display:"flex",justifyContent:"space-around",marginTop:"10px",marginLeft:"-12px"}}>
        <span>{myInfo.post} post</span>
        <span>{myInfo.followers} followers</span>
        <span>{myInfo.following} following</span>
      </div>
      <div style={{marginTop:"10px",marginLeft:"15px"}}>
        {myInfo.name}
      </div>
      <p style={{marginLeft:"15px",wordSpacing:"3px"}}>
        {myInfo.bio}
      </p>
      </div>
    </div>
  <SavedStatus savedStatus={myInfo.savedStatus}/>
    </div>
  )
}

export default Header