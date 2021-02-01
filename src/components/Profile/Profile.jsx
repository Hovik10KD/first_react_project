import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfoContainer store={props.store} />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;