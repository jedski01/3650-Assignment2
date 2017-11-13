//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ListView, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types'

// create a component
export default class ImagesListViewComponent extends Component {
    constructor(props) {
        super(props);

        const imagesDS = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })

        this.state = {
            imageDataSource: imagesDS,
            images: []    
        }


        this.renderThumbnail = this.renderThumbnail.bind(this)

    } 

   addImage(image_url) {

        console.log("adding new image")
        this.setState({
            images: [...this.state.images, image_url]
        }, ()=> {
            this.setState({
                imageDataSource: this.state.imageDataSource.cloneWithRows(this.state.images) 
            })
        })
    } 

    removeImage(index) {

        let newList = [...this.state.images]
        newList.splice(index, 1)

        this.setState({
            images: [...newList]
        }, ()=> {
            this.setState({
                imageDataSource: this.state.imageDataSource.cloneWithRows(this.state.images) 
            })
        })
    }
    
 
    pressRow(rowID) {
        console.log('Thumbnail ' + rowID + ' has been pressed')
        this.props.selectImage(this.state.images[rowID], rowID);
    }
    
    renderThumbnail(image, sectionID, rowID, highlightRow) {
        return(
            <TouchableHighlight style={styles.imageContainer} onPress={
                ()=> {this.pressRow(rowID)}
            }> 
                
                <Image source={{uri : image}} style={styles.image} resizeMode={'contain'}/> 
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
                enableEmptySections = {true}
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