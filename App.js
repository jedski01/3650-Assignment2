import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageControlComponent from './components/ImageControlComponent'
import ImagesListViewComponent from './components/ImagesListViewComponent'
import ImageViewComponent from './components/ImageViewComponent'

 
export default class App extends React.Component {
  
  constructor() {
    super()
  
  this.setSelectedImage = this.setSelectedImage.bind(this)
  this.rotate = this.rotate.bind(this)
  this.reset = this.reset.bind(this)
  this.addImage = this.addImage.bind(this)
  this.deleteImage = this.deleteImage.bind(this)

  } 

  setSelectedImage(image_url, index) { 
    
    this.reset() 
    console.log("set selected image to " + image_url) 
    this.imageView.changeImage(image_url)
    this.imageControl.setSelectedIndex(index)
  } 
  
  rotate(deg) {  
    this.imageView.rotate(deg) 
  }
   
  reset() {
    this.imageView.reset()
  }

  addImage(image_url) { 
    this.imageList.addImage(image_url) 
  } 

  deleteImage(index) {
    this.imageList.removeImage(index)
  }
   
  render() {
    return (
      <View style={styles.container}>
        <ImageViewComponent ref={(_imageView) => {this.imageView = _imageView}}/>   

        <ImageControlComponent ref={(_imageControl)=> {this.imageControl = _imageControl }} 
                              rotate={this.rotate} reset={this.reset}  
                              addImage={this.addImage} deleteImage={this.deleteImage} selectImage={this.setSelectedImage}/>
        
        <ImagesListViewComponent ref={(_imageList) => {this.imageList = _imageList}} 
                                 selectImage={this.setSelectedImage}/>  
      </View> 
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    flexDirection: 'column'
  },
});
