import React, { Component } from 'react';
import { storage } from '../firebase/firebase';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

    class ImageUpload extends Component {
        constructor(props){
            super(props);
            this.state = { 
                image: null,
                imageName: null,
                url: '',
                tempUrl: '',
                crop: {
                    aspect: 16/9,
                    x:2,
                    y:2,
                    width:90
                },
                pixelCrop: null
            } 
            this.handleChange = this.handleChange.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
        }
        handleChange(e){
           if(e.target.files[0]){
            const image = e.target.files[0];
            const tmppath = URL.createObjectURL(image);
            const img = new Image();
            img.src = tmppath;
            this.setState({
                image: img,
                imageName: image.name,
                tempUrl: tmppath
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
        onChange = (crop) => {
          this.setState({ crop });
        }
        completeCrop = (e) => {
            const pixelCrop = e;
            this.setState({ pixelCrop })
        }
        cropImage = () => {

                this.getCroppedImg(this.state.image, this.state.pixelCrop, this.state.imageName).then((resolve) => {
                    const image = resolve;
                    const blobUrl = URL.createObjectURL(resolve);
                    console.log(blobUrl)
                    this.setState({ image }, () => {
                        this.handleUpload();
                    })
                })
             
        }
        
        getCroppedImg(image, pixelCrop, fileName) {

          const canvas = document.createElement('canvas');
          canvas.width = pixelCrop.width;
          canvas.height = pixelCrop.height;
          const ctx = canvas.getContext('2d');
        
          ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
          );
        
          // As Base64 string
          // const base64Image = canvas.toDataURL('image/jpeg');
        
          // As a blob
          return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
              blob.name = fileName;
              console.log(blob)
              resolve(blob);
            }, 'image/jpeg');
          });
        }
        render() {
            return (
                <div>
                    <input type="file" onChange={this.handleChange}/>
                    <ReactCrop 
                    src={this.state.tempUrl ? this.state.tempUrl : 'https://via.placeholder.com/150' } 
                    crop={this.state.crop} 
                    onChange={this.onChange} 
                    onComplete={this.completeCrop}
                    />
                    <button onClick={this.cropImage}>Cortar</button>
                </div>
                )
        }
    }
    
export default ImageUpload;