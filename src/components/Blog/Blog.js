import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';

export default function Blog () {

    const dispatch = useDispatch()
    const history = useHistory()

    const posts = useSelector(store => store.posts);

    useEffect(()=>{
        dispatch({type: 'GET_POSTS'})
    }, [])

    console.log('posts', posts)
    return(
        <>
            <h1 onClick={()=>history.push('/register')}>LOGIN</h1>
            <pre>{JSON.stringify(posts)}</pre>
        </>
    )
}
