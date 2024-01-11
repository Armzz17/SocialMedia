
import "./online.css"

const Online = ({Posts}) => {
  return (
    <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img className="rightbarProfileImg" src={Posts.profile}  alt="" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">{Posts.name}</span>
                </li>
  )
}

export default Online