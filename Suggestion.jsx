import React from 'react'
import SuggestionData from "../../data/suggestion"
import "../../styles/suggestion.css"
const Suggestion = () => {
  return  (
    <div style={{width:"15vw", marginRight:"10vh",marginTop:"20px"}}>
        {
            SuggestionData.map(user=>{
                return <div style={{height:"70px",display:"flex", justifyContent:"space-between", border:"1px solid gray", marginBottom:"10px"}}>
                    <div style={{height:"100px",display:"flex",flexDirection:"column",
                justifyContent:"center",gap:"10px"}}>
                    <span style={{marginTop:"-30px"}}>{user.username}</span>
                    <img src={`${user.profilePic}`} width="30px" height="30px" style={{borderRadius:"45%",paddingLeft:"10px"}}/>
                    </div>
                  <span className='followLink'>Follow</span>
                </div>
            })
        }
    </div>
  )
}

export default Suggestion