import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";


const Post = ({Posts}) => {

    const [like, setLike] = useState(Posts.likes)
    const [isLike, setIsLike] = useState(false)

    const likeHandler = () =>{
        
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Posts.profile} alt="" />
                    <span className="postUsername">{Posts.name}</span>
                    <span className="postDate">5 mins ago.</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/> 
                </div>
            </div>
                



            <div className="postCenter">
                <span className="postText">{Posts?.desc}</span>
                <img className="postImg" src={Posts.photo} alt="" />
            </div>

            <div className="postButtom">
                <div className="postBottom">
                    <div className="postBottomLeft">

                    < RecommendIcon onClick= {likeHandler} className="likeIcon" />
                    <FavoriteIcon onClick= {likeHandler} className="heartIcon" />
                       
                       <span className="postLikeCounter">{like} people like it</span>
                  
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{Posts.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post