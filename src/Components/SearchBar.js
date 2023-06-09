import React from 'react';
import {StyleSheet, View,Text, Image, TextInput} from 'react-native';


const SearchBar = (props) => {
    return (
        <View style={styles.searchBarViewStyle}>
            <View >
            <Image source={require('../Images/magnifying-glass-icon.png')} style={styles.imageStyle}/>
            </View>
            <View style={styles.textInputStyle}>
            <TextInput placeholder='Search for Restaurants' onChangeText={(text) => {
                props.textChanged(text)
            }}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={(e) => console.log(e.nativeEvent.text)}
            />
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
        marginHorizontal: 40,
        marginVertical: 30,
        borderRadius: 20,
        marginTop: 50,
        backgroundColor: 'white'
    },
    textInputStyle: {
        alignSelf: 'center',
        
    }
});

export default SearchBar;