//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
export default class ImageControlComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon.Button name='rotate-left' backgroundColor='cadetblue' onPress={()=>{this.props.rotate(-90)}}>90º</Icon.Button>
                <Icon.Button name='refresh' backgroundColor='cadetblue' onPress={()=>{this.props.reset()}}> Reset </Icon.Button> 
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
 