//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
export default class ImageViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: null,
            imageRotation: 0,
            height: '',
            width: ''
        }
        
    } 
 
    measureDimension(event) {
        this.setState({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
        }, ()=> {
            console.log('Width is ' + this.state.width + ' and height is ' + this.state.height)
        })
    }

    changeImage(image) {
        console.log('new image is ' + image) 
        this.setState({
            image: image
        });
    }

    rotate(deg) {
        let newDeg = this.state.imageRotation + deg
        this.setState({
            imageRotation: newDeg
        }, ()=> {
            console.log('rotate image by ' + this.state.imageRotation + ' degrees')
        })
    }
 
    reset() {
        this.setState({
            imageRotation: 0
        }, ()=> {
            console.log('reset rotation')
        }) 
    } 
    
    render() {
        console.log('new image'); 

        let maxHeight = this.state.height;
        let maxWidth = this.state.width;

        if(this.state.imageRotation % 90 === 0 && this.state.imageRotation % 180 !== 0) {
            console.log('switch orientation') 
            maxHeight = this.state.width;  
            maxWidth = this.state.height 
        }  
 
        let {image} = this.state
        return (  
            
            <View onLayout={(event)=> {this.measureDimension(event)}} style={styles.container}>
                    <Image source={{isStatic: true, uri: image}} 
                           style={{height: maxHeight, width: maxWidth, transform: [{rotateZ: this.state.imageRotation+'deg'}]}}      
                           resizeMode={'contain'}/>    
            </View>       
        ); 
    } 
}

const styles = StyleSheet.create({ 
    container: {
        flex: 16,
        backgroundColor: 'black', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
