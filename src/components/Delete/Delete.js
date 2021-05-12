import { useDispatch} from 'react-redux';

export default function Delete({ post }) {

    const dispatch = useDispatch()

    const deletePost = (postInfo) => {
        dispatch({type: 'DELETE_POST', payload: postInfo})
        console.log(postInfo)
    }

    return (
        <>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </>
    )
}
