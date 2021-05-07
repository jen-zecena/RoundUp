import React , {useState} from 'react';
import { uploadFile, deleteFile, getFile } from 'react-s3';



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

    // function retrievePoster(filename) {
    //     var s3 = new AWS.S3();
    //     s3.getObject(
    //       { Bucket: "roundupposters", Key: "filename" },
    //       function (error, data) {
    //         if (error != null) {
    //           alert("Failed to retrieve an object: " + error);
    //         } else {
    //           alert("Loaded " + data.ContentLength + " bytes");
    //         }
    //       }
    //     );
    //   }
    const handleDeletePoster = async (file) => {
         
        deleteFile(file, config).then(response => console.log(response)).catch(err => console.error(err))
    }

    const handleGetPoster = async (file) => {
         
        getFile(file, config).then(response => console.log(response)).catch(err => console.error(err))
    }
    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
        <button onClick={() => handleDeletePoster("poster1.jpg")}> Delete Poster</button>
        <button onClick={() => handleGetPoster("poster1.jpg")}> GetPoster</button>
    </div>
}
// https://roundupposters.s3.amazonaws.com/poster1.jpg
// https://roundupposters.s3-us-east-1.amazonaws.com/poster1.jpg
export default UploadImageToS3WithReactS3;