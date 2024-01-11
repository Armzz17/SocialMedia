import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Groups2';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionIcon from '@mui/icons-material/Help';
import JobIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import CourseIcon from '@mui/icons-material/School';
import {Posts} from "../../data/dataPost"
import Closefriend from "../closeFriend/Closefriend";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <FeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <VideoIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <QuestionIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Question</span>
                </li>
                <li className="sidebarListItem">
                    <JobIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <CourseIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">

                  {Posts.map(p=>(
                  <Closefriend key={p.id} Posts={p} />
                  ))}
            </ul>
        </div>

    </div>
  )
}

export default Sidebar