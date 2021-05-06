

import React , {useState} from 'react';
import { uploadFile } from 'react-s3';


const REACT_APP_REGION='us-east-1';
const S3_BUCKET ='roundupposters';
const REGION ='us-east-1';
const ACCESS_KEY ='Ipr/pa7YTZGvB94ofLdOjT4rX00CQUp4dpMEW1hD';

// const config = {
//     bucketName: S3_BUCKET,
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
// }
const config = {
    bucketName: 'roundupposters',
    //dirName: 'media', /* optional */
    region: 'us-east-1',
    accessKeyId: 'AKIA6CRJN2MSKJZOJQBH',
    secretAccessKey: 'Ipr/pa7YTZGvB94ofLdOjT4rX00CQUp4dpMEW1hD',
  //  s3Url: 'https:/your-custom-s3-url.com/', /* optional */
  }

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithReactS3;