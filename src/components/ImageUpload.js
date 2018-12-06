import React, { Component } from 'react';
import { storage } from '../firebase/firebase';
import { FormGroup, Input, FormText, Progress } from 'reactstrap';
import uuid from 'uuid';


    class ImageUpload extends Component {
        constructor(props){
            super(props);
            this.state = { 
                image: null,
                imageName: null,
                enableButton: null,
                progress: 0
            } 
        }
        
        handleChange = (e) => {
            
            if(e.target.files[0]){
                const image = e.target.files[0];
                const imageName = uuid()+'.jpeg';
                this.setState({image: image, imageName, enableButton: true}, () => {
                    this.uploadImage();
                })
            }
            
        }
        
        uploadImage = (e) => {
            const { image } = this.state;
            const imageName = this.state.imageName;
            const uploadTask = storage.ref(`images/${imageName}`).put(image);
            uploadTask.on('state_changed', 
            (snapshot) => {
                
                let transferred = snapshot.bytesTransferred;
                let total = snapshot.totalBytes;
                let percentage = Math.floor((transferred * 100) / total);

                //progress function 
                this.setState({progress : percentage})
                
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                storage.ref('images').child(imageName).getDownloadURL().then(url => {
                    //console.log(url)
                    this.props.receiveUrl(url, this.state.imageName);
                })
            }
            );
        }


        render() {
            return (
                <div>
                    <FormGroup>
                      {
                      this.state.progress ? <Progress value={this.state.progress} /> : 
                      <div>
                      <Input type="file" onChange={this.handleChange}/>
                      <FormText color="muted">
                        Formato: JPEG / Tamanho MAX: 500kb / Área ideal: 500x500
                      </FormText>
                      </div>
                      }
                    </FormGroup>
                </div>
                )
        }
    }
    
export default ImageUpload;