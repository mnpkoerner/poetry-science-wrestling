import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function NewPost() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [post, setPost] = useState({
        title: '',
        body: '',
        playlist: '',

    })

    const handleClick = (event, keyword) => {
        event.preventDefault()
        switch(keyword){
            case 'submit':
                dispatch({type: 'NEW_POST', payload: post});
                break;
            case 'back':
                history.push('/home');
                break;
        }
    }




    return(
        <>
        <h1>Add a new post</h1>
        <form>
            <input
                placeholder="Title"
                value={post.title}
                onChange={(event)=>setPost({...post, title: event.target.value})}
                type="text">
            </input>
            <textarea
                placeholder="body"
                value={post.body}
                onChange={(event)=>setPost({...post, body: event.target.value})}>
            </textarea>
            <input
                placeholder="playlist"
                value={post.playlist}
                onChange={(event)=>setPost({...post, playlist: event.target.value})}
                type="text">
            </input>
            <button
                onClick={(event)=>handleClick(event, 'submit')}>
                Submit
            </button>
        </form>
        <button onClick={(event)=>handleClick(event, 'back')}>Home</button>
        </>

    )
}
