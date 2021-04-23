import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function NASA() {

    const dispatch = useDispatch()

    const nasa = useSelector(store => store.nasa)
    const [date, setDate] = useState(new Date())

    console.log('nasa has a value and its', nasa)

    //limits the NASA photo API (cannot call date in the future)
    const limit = () => {
        return new Date().toISOString().split('T')[0];
    }

    //NASA API sends either a photo or video, display checks for media_type and renders
    const display = (input) => {
        switch (input.media_type) {
            case 'video':
                return (<iframe width="420" height="315" src={input.url} title="NASA Video of the Day"></iframe>)
            case 'image':
                return (<img src={input.url} alt={input.title}></img>)
            default:
                console.log('there was a problem')

        }
    }

    useEffect(() => {
        dispatch({ type: 'GET_PHOTO' })
    }, [dispatch])

    return (
        <>
            <p>This is where we'll make some fun API calls to NASA's servers</p>
            <button onClick={() => console.log(nasa)}>CHECK VALUE</button>
            <label for="start">Start date:</label>

            <input
                type="date"
                id="start"
                name="trip-start"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                min="1996-06-16"
                max={limit()}>
            </input>
            <button onClick={()=>dispatch({type: 'GET_PHOTO', payload: date})}>Get</button>
            <div>
                <h2>{nasa.title}</h2>
                <p>{nasa.explanation}</p>
                {display(nasa)}
            </div>
        </>
    )
}
