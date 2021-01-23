import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <img className={classes.topImage} src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg" />
      <div className={classes.profile}>
        img + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;