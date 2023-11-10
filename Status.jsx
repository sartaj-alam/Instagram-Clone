import React from 'react'
import "../../styles/status.css"
import {obj as statusObj} from "../../data/statusData"

const Status = () => {
  return (
    <div className='statusContainer'>
        {
            statusObj.map(obj=>{
                return<div style={{display:"flex",flexDirection:"column",gap:"10px",
                borderRadius:"50%", alignItems:"center"}}>


                <img style={{borderRadius:"50%",border:"2px solid pink"}} width="50px" height="50px" src={`${obj.profilePic}`}/>
                <span style={{fontSize:"15px"}}>{obj.username}</span>
                </div>
            })
        }

    </div>
  )
}

export default Status