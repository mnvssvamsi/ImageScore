import React, { useState, useEffect, Fragment } from 'react'
import './ImageScore.css'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'

let uniqueId= '';
const ImageScore = () => {

    const [image, setImage] = useState([])
    const[score,setScore]= useState('')
    useEffect(() => {
        axios.get('https://imagescore-31b26.firebaseio.com/images.json')
            .then(res => {
                console.log(res.data)
                let ImageData = [];
                for (let key in res.data) {
                    ImageData.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setImage(ImageData)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    uniqueId= image.map(imageKey=>{
        return  imageKey.id
      })
    useEffect(()=> {
    },[])
    const scoreHandler= (e) => {
        console.log("uniqueId",uniqueId)
        setScore(e.target.value)
        console.log("score",score)
        axios.post(`https://imagescore-31b26.firebaseio.com/images/${uniqueId}/score.json`,e.target.value)
        .then(res => {
            console.log("score res",res.data)
            uniqueId='';
        })
    }
    console.log("image",image)
    return (
        <Fragment>
            <NavBar />
            <div className='Images'>
                {image.map(imageElement => {
                    return <img className='ImageElement'
                      key={imageElement.id}  src={imageElement.images} alt='imageScore' />
                })}
                <div className='ScoreContainer'>
                <label className='text-label'>Select the Score</label>
                {/* {image.map(imageKey=>{ */}
                    {/* let uniqueId= imageKey.id; */}
                <select className='filtering' onChange={(e)=>{scoreHandler(e)}}>
                <option value=''>Select Score</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
            </select>
                {/* // })} */}
                <p><label>Selected Score Is {score}</label></p>
                </div>

            </div>
        </Fragment>

    )
}


export default ImageScore
