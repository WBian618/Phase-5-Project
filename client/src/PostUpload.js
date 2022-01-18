import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function PostUpload({currentUser}) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [caption, setCaption] = useState({
        image: '',
        caption: '',
        user_id: currentUser.id,
        image_url: ''
    })

    const handleChange = (e) => {
        setCaption({ ...caption, [e.target.name]: e.target.value });
    };

    function handleSubmit() {
        const configObj = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(caption)
        };
        console.log(configObj);
        // update fetch path once completed on backend  
        fetch("/posts", configObj)
        .then((resp) => {
            if (resp.ok) {
            resp.json()
            .then((data) => {
                
                setCaption('');
                console.log(data)
                
            });
            } else {
            resp.json().then((errors) => {
                alert('Title and post content must be completed')
            });
            }
        });
    }
console.log(selectedImage)
console.log(caption)
    return (
        <div>
            <h1 id='share'> Share Your Image</h1>
            {selectedImage && (
                <div>
                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <label className="custom-file-upload">
            <FontAwesomeIcon icon={faFileUpload} />
            <input
                type="file"
                name="image"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
            <br></br>
            <label htmlFor="fname">Caption</label>  <input value={caption.caption} name="caption" onChange={handleChange} type="text" id='caption' /> 
            </label>
            <FontAwesomeIcon onClick={handleSubmit} icon={faArrowCircleRight}  />
        </div>
        
    )
}

export default PostUpload

