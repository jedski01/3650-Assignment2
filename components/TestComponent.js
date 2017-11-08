//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// create a component
export default class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <Image source={this.props.images[1]} style={{width: 500, height: 500}}/>
            </View>
        );
    }
} 
