import "./rightbar.css"
import {Posts} from "../../data/dataPost"
import Online from "../online/Online"



function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                <img className="birthdayImg" src="./assets/gift.png" alt="" />
                <span className="birthdayText">
                 <b> Christain Castillo</b> and <b>3 other friends</b> have a birthday today</span>
            </div>
            <img className="rightbarAd" src="./assets/ads.jpg" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
              <ul className="rightbarFriendList">
                {Posts.map(p=>(
                  <Online key={p.id} Posts={p} />
                ))}
                


              </ul>
        </div>
    </div>
  )
}

export default Rightbar