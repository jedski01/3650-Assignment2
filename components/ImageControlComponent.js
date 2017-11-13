//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImagePicker } from 'expo';

// create a component
export default class ImageControlComponent extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: -1
        }

        this.setSelectedIndex = this.setSelectedIndex.bind(this)
        this.deleteImage = this.deleteImage.bind(this)
        this._confirmDelete = this._confirmDelete.bind(this) 
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({ 
            allowsEditing: true
        })
 
        if (!result.cancelled) {
            this.props.addImage(result.uri)
        }
    }

    setSelectedIndex(index) {
        this.setState({
            selectedIndex: index
        })
    }

    _confirmDelete() {

        if(this.state.selectedIndex == -1){
            Alert.alert('Remove from slideshow', 'No image is selected')
        } else {
            Alert.alert('Remove from slideshow', 'Are you sure you want to remove this image from slideshow', [
                {text: 'Cancel', onPress: ()=>{console.log('cancelled')}},
                {text: 'OK', onPress: ()=> {this.deleteImage()}}
            ]);
        }
    } 

    deleteImage() {
 
        console.log('deleting image') 
        this.props.deleteImage(this.state.selectedIndex)
        this.setState({
            selectedIndex: -1 
        })  
        this.props.selectImage(null, -1) 
          
    }
    render() {
        return (
            <View style={styles.container}> 
                <Icon.Button name='plus-circle' backgroundColor='cadetblue' onPress={this._pickImage}> Add </Icon.Button>
                <Icon.Button name='minus-circle' backgroundColor='cadetblue' onPress={this._confirmDelete}> Del </Icon.Button>
                <Icon.Button name='refresh' backgroundColor='cadetblue' onPress={()=>{this.props.reset()}}> Reset </Icon.Button>
                <Icon.Button name='rotate-left' backgroundColor='cadetblue' onPress={()=>{this.props.rotate(-90)}}>90º</Icon.Button> 
                <Icon.Button name='rotate-right' backgroundColor='cadetblue' onPress={()=>{this.props.rotate(90)}}>90º</Icon.Button>  
            </View> 
        );  
    }  
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
 