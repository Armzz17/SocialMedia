import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import MerieCover from "../../assets/cover/MerieCover.jpg"
import MerieProfile from "../../assets/Person/Merie.jpg"

const Profile = () => {
  return (
    <>
    <Topbar/>
        <div className="profile">
    <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                 <div className="profileCover">  
                <img className="profileCoverImg" src={MerieCover}alt="" />
                <img className="profileUserImg" src={MerieProfile} alt="" />
                </div> 
                <div className="profileInfo">
                    <h4 className="profileInfoName">Merie Diaz</h4>
                    <span className="profileInfoDesc">Favorite ko Coco milktea</span>
                </div>
            </div>
            <div className="profileRightBottom">
    <Feed/>
    <Rightbar profile/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile
