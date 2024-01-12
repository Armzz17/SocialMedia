import "./rightbar.css"
import {Posts} from "../../data/dataPost"
import Online from "../online/Online"
import dsadas from "../../assets/Person/Auro.jpg"



function Rightbar({profile}) {
      const HomeRightbar = () => {
        return(
          <>
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

          </>
        );
      };

      const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User Information </h4>
            <div className="rightbarinfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City</span>
                <span className="rightbarInfoValue">Gen. Trias</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From</span>
                <span className="rightbarInfoValue">San Fernando</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Birthday</span>
                <span className="rightbarInfoValue">March 04, 2001</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User Friends </h4>
              <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                  <img src="../../assets/Person/Auro.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Paul Auro</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="../../assets/Person/Tan.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Christian Castillo</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="../../assets/Person/Kaizer.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Kaizer Abdurajik</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="../../assets/Person/Mercy.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Mercy Diaz</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="../../assets/Person/Viron.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Vironieca Santiago</span>
                </div>
                <div className="rightbarFollowing">
                  <img src="../../assets/Person/Arman.jpg" alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">Armzz Cabagay</span>
                </div>
              </div>
          </>
        )
      }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/> } 
        </div>
    </div>
  )
}

export default Rightbar