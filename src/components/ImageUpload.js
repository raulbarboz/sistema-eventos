import React, { Component } from 'react';
import { storage } from '../firebase/firebase';
import { Progress } from 'reactstrap';
import uuid from 'uuid';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

    class ImageUpload extends Component {
        constructor(props){
            super(props);
            this.state = { 
                image: null,
                imageName: uuid(),
                url: null,
                newUrl: '',
                progress: ''
            } 
            this.handleChange = this.handleChange.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
            this.handleCrop = this.handleCrop.bind(this);
        }
        
        _crop(){
            // image in dataUrl
            const image = this.refs.cropper.getCroppedCanvas().toDataURL('image/jpeg');
            this.setState({image})
        }
        
        handleCrop(e){
            e.preventDefault();
            this.setState({newUrl: this.state.image}, () => {
               this.handleUpload()
            })
        }
        
        handleChange(e){
           if(e.target.files[0]){
            const image = e.target.files[0];
            const url = URL.createObjectURL(image);
            this.setState({
                image,
                url
            }, () => {
               
            })
           } 
        }
        
        handleUpload(e){
            let newUrl = this.state.newUrl
            newUrl = newUrl.split(',')[1];
            const { imageName } = this.state;
            const uploadTask = storage.ref(`images/${imageName}`).putString(`${newUrl}`, 'base64');
            uploadTask.on('state_changed', 
            (snapshot) => {
                //progress function 
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
                    
                    this.props.receiveUrl(url, this.state.imageName);
                    
                })
                
            }
            );
        }
            
        render() {
            return (
                <div>
                    {
                      this.state.progress ? <Progress value={this.state.progress} /> : 
                    <div>
                    <input type="file" onChange={this.handleChange}/>
                    { this.state.image ? 
                    <div>
                    <Cropper
                        ref='cropper'
                        src={this.state.url ? this.state.url : ''}
                        aspectRatio={16/9}
                        style={{height: 400, width: '100%'}}
                        guides={false}
                        crop={this._crop.bind(this)}
                    />                
                    <button onClick={this.handleCrop}>Cortar</button> 
                    </div> : ''
                    }
                    </div>
                    }
                </div>
                )
        }
    }
    
export default ImageUpload;