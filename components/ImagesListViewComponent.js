//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ListView, TouchableHighlight, Image} from 'react-native';
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

        // this.state.imageDataSource.cloneWithRows(this.props.images)

        this.renderThumbnail = this.renderThumbnail.bind(this)

    } 

    componentDidMount() {

        this.setState({
            imageDataSource: this.state.imageDataSource.cloneWithRows(this.props.images)
        })
    }

    pressRow(rowID) {
        console.log('Thumbnail ' + rowID + ' has been pressed')
        this.props.selectImage(rowID);
    }
    
    renderThumbnail(image, sectionID, rowID, highlightRow) {
        return(
            <TouchableHighlight style={styles.imageContainer} onPress={
                ()=> {this.pressRow(rowID)}
            }>
                <Image source={image} style={styles.image} resizeMode={'contain'}/> 
            </TouchableHighlight>   
        )
    } 
 
    render() {
        return (
            <View style={styles.container}>
                <ListView 
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
        backgroundColor: '#E1EBED',   
        justifyContent: 'center', 
        alignItems: 'center'
    },
    imageStrip: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 100, 
        height: 100     
    },
    imageContainer: {
        justifyContent: 'center',
        padding: 2
    }
})