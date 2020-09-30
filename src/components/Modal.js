import React from 'react'

const Modal = ({ selectedImg,setSelectedImg }) => {

    const handleClick = (e) => {
        // check if we click on the image with class name backdrop
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    };

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal;
