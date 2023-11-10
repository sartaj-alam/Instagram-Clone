import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GridViewIcon from '@mui/icons-material/GridView';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
const MyPost = ({post}) => {
  return (
    <div>
        <div style={{ display:"flex",color:"grey",fontSize:"14px",gap:"5vh",marginTop:"10px",justifyContent:"center",textTransform:"uppercase"}}>
        <span><GridViewIcon/> <span style={{color:"white"}}>Posts</span></span>
           <span><VideoLibraryIcon/><span style={{color:"white"}}>Reels</span></span>
           <span><TurnedInNotIcon/><span style={{color:"white"}}>Saved</span></span>
            <span><InstagramIcon/><span style={{color:"white"}}>Tagged</span></span>
        </div>
    <div style={{width:"80%",display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"1vh",rowGap:"1vh"}}>
        {post.map((ele)=>{
            return <img style={{width:"300px",height:"300px",objectFit:"cover",marginTop:"2vh"}} src={`${ele.postImages[0]}`} alt="" />
    
        })}
    </div>
    </div>
  )
}

export default MyPost