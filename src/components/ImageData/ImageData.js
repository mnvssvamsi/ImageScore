import React, { Fragment, useState } from 'react'
import './ImageData.css'
import { storage } from '../../firebase'
import axios from 'axios'
import NavBar  from '../NavBar/NavBar'
const ImageData = () => {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null)

    //submit handler
    const imageSubmitHander = (e) => {
        e.preventDefault();

        const imageData = {
            images: url
        }
        axios.post('https://imagescore-31b26.firebaseio.com/images.json', imageData)
            .then(res => {
                console.log(res)
                alert("image submitted")
            })
            .catch(err => {
                console.log(err)
            })
    }
    //image handler
    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    // image upload handler
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        console.log('image', image, image.name)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                uploadTask
                    .snapshot
                    .ref
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    };
    return (
        <Fragment>
            <NavBar />
            <div className='image-container'>
                <form onSubmit={imageSubmitHander}>
                    <div className='form-container'>
                        <label>Task id-1</label>
                        <label className='text-label'>Upload the image</label>
                        <label style={{ margin: '2px' }}>Design ur image in a colourful way. Add Borders with beautiful colours and add your name on the image</label>
                        <input className='input-file' type='file' onChange={handleChange} />
                        <progress className='progress' value={progress} max='100' />
                        <button className='upload-file' onClick={(image) => handleUpload(image)} >Upload</button>
                        <input className='image-submit' type='submit' />
                        <img className='upload-image' src={url || "http://via.placeholder.com/500"} alt='upload' />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}


export default ImageData