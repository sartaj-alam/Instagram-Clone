import React from 'react'
import "../../styles/post.css"
import { obj as postObject } from "../../data/postData"
const Post = () => {
    return (
        <div className='postContainer'>
            {
                postObject.map(postData => {
                    return <div style={{border:"1px solid gray",padding:"2px 5px",marginBottom:"10px",width:"80%"}}>
                        <div class="postHeader">
                            <img style={{width:"30px",height:"30px", borderRadius:"50%"}} src={`${postData.profilePic}`} />
                            <span>{postData.username}</span>
                        </div>
                        <div className='postMain'>
                            <img width="100%" src={`${postData.postPic}`} />
                            <span>{postData.likes} likes</span>
                            <span style={{color:"gray",marginBottom:"20px",marginLeft:"10px"}}>{postData.aboutPost}</span>
                        </div>
                        <div>
                            {
                                postData.comments.map(comment=>{
                                    return <div>
                                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                            <img width="30px" height="30px" style={{borderRadius:"45%"}} src={`${comment.profilePic}`} />
                                            <span style={{fontSize:"13px"}}>{comment.username}</span>
                                            <span style={{fontSize:"15px", color:"rgb(207, 201, 204)"}}>{comment.comment}</span>
                                        </div>
                                        <span style={{color:"gray",marginLeft:"20px"}}>{comment.likes} likes</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default Post