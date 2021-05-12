import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Delete from '../Delete/Delete'
export default function NewPost() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [post, setPost] = useState({
        title: '',
        body: ''

    })

    const handleClick = (event, keyword) => {
        event.preventDefault()
        switch (keyword) {
            case 'submit':
                dispatch({ type: 'NEW_POST', payload: post });
                break;
            case 'back':
                history.push('/home');
                break;
            default:
                console.error('something went wrong')
        }
    }




    return (
        <>
            <div className="text-container">
                <form className="post-container">
                    <h1>Add a new post</h1>
                    <input
                        placeholder="Title"
                        value={post.title}
                        onChange={(event) => setPost({ ...post, title: event.target.value })}
                        type="text">
                    </input>
                    <textarea
                        placeholder="body"
                        value={post.body}
                        onChange={(event) => setPost({ ...post, body: event.target.value })}>
                    </textarea>
                    <button
                        onClick={(event) => handleClick(event, 'submit')}>
                        Submit
                    </button>
                    <button onClick={()=>dispatch({type: 'LOGOUT'})}>Log Out</button>
                </form>
            </div>
        </>

    )
}
