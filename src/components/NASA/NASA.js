import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';

export default function NASA () {

    const dispatch = useDispatch()

    const nasa = useSelector(store=>store.nasa)

    console.log('nasa has a value and its', nasa)

    const display = (input) => {
        switch(input.media_type){
            case 'video':
                return (<iframe width="420" height="315" src={input.url}></iframe>)
            case 'image':
                return (<img src={input.url} alt={input.title}></img>)
            default:
                console.log('there was a problem')

        }
    }

    useEffect(()=>{
        dispatch({type: 'GET_PHOTO'})
    }, [])

    return(
        <>
        <p>This is where we'll make some fun API calls to NASA's servers</p>
        <button onClick={()=>console.log(nasa)}>CHECK VALUE</button>
        <div>
            <h2>{nasa.title}</h2>
            <p>{nasa.explanation}</p>
                {display(nasa)}
        </div>
        </>
    )
}
