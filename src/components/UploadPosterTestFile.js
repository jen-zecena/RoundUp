import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import functions from "./PosterApi.js"



class UploadPoster extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }

  };

  onChangeHandler=event=>{
    var file = event.target.files[0];
    console.log(file);
    console.log(this.validateSize(event));
    if(this.validateSize(event)){
      console.log(file);
  // if return true allow to setState
     this.setState({
      selectedFile: file
      });

    }
  }

  fileUploadHandler = () => {
    const data = new FormData()
    console.log(this.state.selectedFile);
    data.append('file', this.state.selectedFile)
    console.log(data);
    functions.uploadPoster(this.selectedFile, 55, "testEvent1");

  };
 //  validateSize=(event)=>{
 //  let file = event.target.files[0];
 //  let size = 30000;
 //  let err = '';
 //  console.log(file.size);
 //  if (file.size > size) {
 //   err = file.type+'is too large, please pick a smaller file\n';
 //   toast.error(err);
 // }


  render() {
    return(
      <div>
      <Form>
        <Form.Group controlId="uploadPoster">
          <Form.File
            onChange = {this.onChangeHandler}
            value={this.selectedFile}
            id="custom-file"
            label="Upload Poster Image"
            custom/>
        </Form.Group>
      </Form>
      <h1>{this.selectedFile} </h1>
    <Button variant="danger" type="submit" onClick = {this.fileUploadHandler}>Submit</Button>
      </div>
    );
  }

}

export default(UploadPoster)
