import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { colors } from '@mui/material';
const SavedStatus = ({savedStatus}) => {
  return (
    <div style={{display:"flex",marginTop:"3vh",gap:"10vh",marginLeft:"10vh"}}>
        {savedStatus.map((status)=>{
            return <div style={{ display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img style={{width:"10vh",height:"10vh",borderRadius:"50%",border:"1px solid pink" }} src={`${status.status[0]}`}/>
            <span>{status.statusName}</span>
            </div>
        })}
       <div style={{ textAlign:"center",fontSize:"50px", width:"50px",height:"55px",backgroundColor:"rgb(77,77,77)",border:"1px solid grey",borderRadius:"50%"}}>+</div>
    </div>
  )
}

export default SavedStatus