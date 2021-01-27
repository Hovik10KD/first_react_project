import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div>
            my Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts;