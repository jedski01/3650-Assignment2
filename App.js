import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageControlComponent from './components/ImageControlComponent'
import ImagesListViewComponent from './components/ImagesListViewComponent'
import ImageViewComponent from './components/ImageViewComponent'
import TestComponent from './components/TestComponent'
const image = require('./assets/album/image1.png')

const images = [
  require('./assets/album/image1.png'),
  require('./assets/album/image2.jpg'),
  require('./assets/album/image3.jpg'),
  require('./assets/album/image4.jpg'),
  require('./assets/album/image5.jpg'),
  require('./assets/album/image6.jpg')
]

export default class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      selectedIndex: -1,
    }
  }

  setSelectedImage(index) {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageControlComponent/>
        <ImageViewComponent/>
        <ImagesListViewComponent images={images}/> 
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
