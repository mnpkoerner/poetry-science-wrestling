import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Delete({ post }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const posts = useSelector(store => store.posts);

    const [update, setUpdate] = useState('')
    const [edit, setEdit] = useState(false)

    const deletePost = (postInfo) => {
        dispatch({type: 'DELETE_POST', payload: postInfo})
        console.log(postInfo)
    }
    const editPost = (postInfo) => {
        console.log(postInfo)
    }

    return (
        <>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <button onClick={() => editPost(post.id)}>Edit</button>
        </>
    )
}
