import React from 'react';
import {StyleSheet, View,Text, Image, TextInput} from 'react-native';


const SearchBar = () => {
    return (
        <View style={styles.searchBarViewStyle}>
            <View >
            <Image source={require('../Images/magnifying-glass-icon.png')} style={styles.imageStyle}/>
            </View>
            <View style={styles.textInputStyle}>
            <TextInput placeholder='Search for Restaurants'/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 50,
        width: 50,
        alignSelf: 'flex-start',
    },
    searchBarViewStyle: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 40,
        marginVertical: 30,
        borderRadius: 20,
    },
    textInputStyle: {
        alignSelf: 'center',
    }
});

export default SearchBar;