import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uploadPoster from "./PosterApi.js"
import S3 from 'react-aws-s3';



function UploadPoster(){

  const config = {
    bucketName: 'roundupposters',
    //dirName: 'media', /* optional */
    
    region: 'us-east-1',
    accessKeyId: 'AKIA6CRJN2MSKJZOJQBH',
    secretAccessKey: 'Ipr/pa7YTZGvB94ofLdOjT4rX00CQUp4dpMEW1hD',
  //  s3Url: 'https:/your-custom-s3-url.com/', /* optional */
  }

  const ReactS3Client = new S3(config);


  function uploadPoster (file, userID, eventName){
                var string = userID + eventName;
                 var hash = 0;

                 if (string.length === 0) return hash;

                 for (var i = 0; i < string.length; i++) {
                     var char = string.charCodeAt(i);
                     hash = ((hash << 5) - hash) + char;
                     hash = hash & hash;
                 }

                 ReactS3Client
                     .uploadFile(file, hash)
                     .then(data => console.log(data))
                     .catch(err => console.error(err))
  }

  const[posterFile,setPosterFile] = useState({
    poster: ""
  });


  function handleChange(event){
    const {name,value} = event.target
    setPosterFile(prevValue => {
      if (name === "poster"){
        return {
          poster: value
        };
      };
    })
  }

  function sendPosterToBucket(){
    uploadPoster(posterFile.poster, 5, "testEvent");
  }
    return(
      <div>
      <Form>
        <Form.Group controlId="poster">
          <Form.File
            onChange = {handleChange}
            value={posterFile.poster}
            id="custom-file"
            label="Upload Poster Image"
            custom/>
        </Form.Group>
      </Form>
      <h1>{this.selectedFile} </h1>
    <Button variant="danger" type="submit" onClick = {sendPosterToBucket}>Submit</Button>
      </div>
    );

}

export default(UploadPoster)
