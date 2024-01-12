import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import "./home.css"
import Profile from "../../components/profile/Profile"



function Home() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

export default Home