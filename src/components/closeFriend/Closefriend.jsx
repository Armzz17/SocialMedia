import "./closefriend.css"



const Closefriend = ({Posts}) => {
  return (
    <li className="sidebarFriend">
    <img src={Posts.profile} alt="" className="sidebarFriendImg" />
    <span className="sidebarFriendname">{Posts.name}</span>
</li>
  )
}

export default Closefriend