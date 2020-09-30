import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ( { file, setFile } ) => {

    // get url and progress from useStorage hook when passing file props
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if(url) { 
            setFile(null);
        }
    }, [url])


    return (
        <div className="progress-bar" style={{ width: progress + '%' }} >
        </div>
    )
}

export default ProgressBar
