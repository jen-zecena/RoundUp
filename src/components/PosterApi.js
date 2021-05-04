/**
    This component exists to contain all the logic regarding uploading and obtaining
    posters from our S3 buckets. There are outside setup files needed to establish a
    connection but this class does not need to be an Object as there are no static
    variables shared between the methods.

    It will be queried after receiving a response from the Server related to one or multiple
    events. The displayPoster and displayPosters components will thus be utilizing
    this class to obtain a copy of the poster as is stored in the S3 bucket.
*/
import React from 'react';
import S3 from 'react-aws-s3';

const config = {
  bucketName: 'roundupposters',
  //dirName: 'media', /* optional */
  region: 'us-east-1',
  accessKeyId: 'AKIA6CRJN2MSKJZOJQBH',
  secretAccessKey: 'Ipr/pa7YTZGvB94ofLdOjT4rX00CQUp4dpMEW1hD',
//  s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

/**
  file: the poster to be uploaded
  userID: the id of the user that wants to upload the poster
  eventName: the name of the event that is related to the poster
  return: the url of the poster

  The method will attempt to create the poster in our S3 bucket. The poster name will
  be decided by a hash of the combination userID+eventName
  in order to have a deterministic and standard way of creating posters. This will also
  allow us to override posters for the same event with this function.

  Solution extracted from: https://github.com/Developer-Amit/react-aws-s3
*/
export default function uploadPoster (file, userID, eventName){
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

/**
  url: the name of the file to be removed from S3
  return value: none

  This function will remove the file in the given url.  No return value is necessary.
*/
export function removePoster(filename) {

  ReactS3Client
    .deleteFile(filename)
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

var AWS = require('aws-sdk');

AWS.config.update(
  {
    accessKeyId: "AKIA6CRJN2MSKJZOJQBH",
    secretAccessKey: "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",
  }
);

var s3 = new AWS.S3();

/**
  url: the url of the file to be retrieved from S3
  return value: temp file

  This function will retrieve a copy of the file in the given url. The copy will be returned
  to be rendered by our application.

  Solution extracted from: https://www.edureka.co/community/34428/javascript-code-to-download-a-file-from-amazon-s3
*/
export function retrievePoster(filename) {
  s3.getObject(
    { Bucket: "roundupposters", Key: "filename" },
    function (error, data) {
      if (error != null) {
        alert("Failed to retrieve an object: " + error);
      } else {
        alert("Loaded " + data.ContentLength + " bytes");
      }
    }
  );
}
