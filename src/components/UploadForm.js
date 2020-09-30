import React, {useState} from 'react'

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {

        // arrray with 0 mean we only want to select the first image
        // if we want multiple we could adjust the array value 2,3,4...-
        let selected = e.target.files[0];
        if(selected && allowTypes.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please select an image fle (.png or .jpeg)');
        }
        console.log(selected);
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {/* if error != null will render div */}
                { error && <div className="error"> {error} </div> }
                { file && <div> {file.name} </div>}
            </div>
        </form>
    )
}

export default UploadForm
