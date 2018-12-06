import React, { Component } from 'react';
import { storage } from '../firebase/firebase';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

    class ImageUpload extends Component {
        constructor(props){
            super(props);
            this.state = { 
                image: null,
                url: null
            } 
            this.handleChange = this.handleChange.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
        }
        
        _crop(){
            // image in dataUrl
            console.log(this.refs.cropper.getCroppedCanvas());
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
            const { image } = this.state;
            const imageName = this.state.imageName;
            const uploadTask = storage.ref(`images/${imageName}`).put(image);
            uploadTask.on('state_changed', 
            (snapshot) => {
                //progress function 
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                storage.ref('images').child(imageName).getDownloadURL().then(url => {
                    this.setState({url})
                })
            }
            );
        }
            
        render() {
            return (
                <div>
                    <input type="file" onChange={this.handleChange}/>
                    <Cropper
                        ref='cropper'
                        src={this.state.url ? this.state.url : ''}
                        style={{width: 300, height: '100%'}}
                        aspectRatio={16/9}
                        guides={false}
                        crop={this._crop.bind(this)}
                    />
                    <button onClick={this.cropImage}>Cortar</button>
                </div>
                )
        }
    }
    
export default ImageUpload;