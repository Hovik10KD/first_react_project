import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message="Hi, how are you?" likesCount="20"/>
            <Post message="It's my first post" likesCount="10"/>
            <Post message="It's my first post" likesCount="10"/>
            <Post message="It's my first post" likesCount="10"/>
            <Post message="It's my first post" likesCount="10"/>
        </div>
    )
}

export default MyPosts;