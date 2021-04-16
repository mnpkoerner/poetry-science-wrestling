import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function NewPost() {

    const [post, setPost] = useState({
        title: '',
        body: '',
        date: '',
        playlist: '',

    })

    const handleClick = (event, keyword) => {
        event.preventDefault()
        console.log(keyword)
        switch(keyword){
            case "submit":
                console.log('switch submit')
                console.log(post)
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
            <button
                onClick={(event)=>handleClick(event, 'submit')}>
                Submit
            </button>
        </form>
        </>

    )
}
