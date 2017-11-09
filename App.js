import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageControlComponent from './components/ImageControlComponent'
import ImagesListViewComponent from './components/ImagesListViewComponent'
import ImageViewComponent from './components/ImageViewComponent'
 
const images = [ 
  require('./assets/album/image1.png'),
  require('./assets/album/image2.jpg'),
  require('./assets/album/image3.jpg'),
  require('./assets/album/image4.jpg'),
  require('./assets/album/image5.jpg'),
  require('./assets/album/image6.jpg'),
  require('./assets/album/image7.jpg'),
  require('./assets/album/image8.jpg'),
  require('./assets/album/image9.jpg')
]

export default class App extends React.Component {
  
  constructor() {
    super()
    
   this.setSelectedImage = this.setSelectedImage.bind(this)
    this.rotate = this.rotate.bind(this)
    this.reset = this.reset.bind(this)
  }

  setSelectedImage(index) { 
    
    this.reset()
    console.log('changed selected to ' + index) 
    this.imageView.changeImage(images[index] )
    
  } 

  rotate(deg) {  
    this.imageView.rotate(deg) 
  }

  reset() {
    this.imageView.reset()
  }
 
  render() {
    return (
      <View style={styles.container}>
        <ImageViewComponent ref={(_imageView) => {this.imageView = _imageView}}/>   
        <ImageControlComponent rotate={this.rotate} reset={this.reset}/>
        <ImagesListViewComponent images={images} selectImage={this.setSelectedImage}/>  
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
