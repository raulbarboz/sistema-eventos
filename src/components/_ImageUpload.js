import React, { Component } from 'react';
import { storage } from '../firebase/firebase';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

    class ImageUpload extends Component {
        constructor(props){
            super(props);
            this.state = { 
                image: null,
                imageName: 'test',
                url: null,
                newUrl: ''
            } 
            this.handleChange = this.handleChange.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
            this.handleCrop = this.handleCrop.bind(this);
        }
        
        _crop(){
            // image in dataUrl
            const image = this.refs.cropper.getCroppedCanvas().toDataURL();
            this.setState({image})
        }
        
        handleCrop(){
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
                console.log(this.state)
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
                    <input type="file" onChange={this.handleChange}/>
                    
                    {
                    
                    this.state.newUrl ? 
                    <img src={this.state.newUrl}/> : 
                    <Cropper
                        ref='cropper'
                        src={this.state.url ? this.state.url : ''}
                        aspectRatio={16/9}
                        guides={false}
                        crop={this._crop.bind(this)}
                    /> 
                        
                    }
                    
                    <button onClick={this.handleCrop}>Cortar</button>
                </div>
                )
        }
    }
    
export default ImageUpload;