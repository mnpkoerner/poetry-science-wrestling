import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Delete({ post }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const posts = useSelector(store => store.posts);

    const [update, setUpdate] = useState('')
    const [edit, setEdit] = useState(false)

    const editPost = (postInfo) => {
        console.log(postInfo)
    }

    return (
        <>
            <button onClick={() => editPost(post.id)}>Edit</button>
        </>
    )
}
