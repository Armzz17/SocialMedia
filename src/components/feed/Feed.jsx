import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import {Posts} from "../../data/dataPost"

const Feed = () => {
  return (
    <>
    <div className="feed">
        <div className="feedWrapper">
            <Share /> 
            {Posts.map((p) => (
              <Post key={p.id} Posts={p} />
            
            ))}
          

           
        </div>
    </div>
   </>
  )
}

export default Feed
