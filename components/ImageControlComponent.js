//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
                <Text>This is the Control COmponent</Text>                
            </View> 
        );
    }
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'    
    }
    
})
