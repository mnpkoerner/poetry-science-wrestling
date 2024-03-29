import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Delete from '../Delete/Delete'

export default function Blog() {

    const dispatch = useDispatch()
    const history = useHistory()

    const posts = useSelector(store => store.posts);
    const user = useSelector(store=>store.user)

    useEffect(() => {
        dispatch({ type: 'GET_POSTS' })
    }, [dispatch])

    console.log('posts', posts)

    return (
        <>
            <div className="text-container">
                <h1 onClick={() => history.push('/register')}>LOGIN</h1>
                {/* <pre>{JSON.stringify(posts)}</pre> */}

                {posts.map((post) => {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <p>
                                Recent shows archived <a
                                    href="https://www.kfai.org/program/poetry-science-wrestling/"
                                    rel="external">
                                    here
                                </a></p>
                                {user.id ? <Delete post={post}/> : <span></span>}
                        </div>
                    )
                })}
            </div>

        </>
    )
}
