//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types'

// create a component
export default class ImagesListViewComponent extends Component {
    constructor(props) {
        super(props);

        const images = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })

        this.state = {
            imageDataSource: images    
        }

        this.state.imageDataSource.cloneWithRows(this.props.images)

        this.renderThumbnail = this.renderThumbnail.bind(this)

    } 

    pressRow(rowID) {
        console.log('Thumbnail ' + rowID + ' has been pressed')
    }
    
    renderThumbnail(image, sectionID, rowID, highlightRow) {
        {console.log('hello')}
        <TouchableHighlight>
            <Image source={image} style={{height: 100, width: 100}}/>
        </TouchableHighlight>
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                style={styles.container}
                dataSource = {this.state.imageDataSource}
                renderRow = {this.renderThumbnail}
                horizontal = {true} 
                />
            </View> 
            
        );
    }
} 


const styles = StyleSheet.create({
    container: {
        flex: 4, 
        backgroundColor: 'blue'  
    }
})