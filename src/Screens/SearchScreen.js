import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';


async function getData(){
    await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
            'Authorization': 'Bearer XTC1RAyu6yEe8O_mWzXy1T6BRp30m1IMT_Jk_zlPu1YmUeVAMgOppKIcfYONPWS5XdEf-EQ657dFWLYzL2R6ylA3FPyYQM_XzhetjDOpK59vUVGtoVCjbAhbYH4cYXYx'
        },
        params: {
            location: 'atlanta',
            term: 'sushi'
        }
    }).then((data) => console.log(data)).catch((error) => console.log(error))
}

const SearchScreen = () => {
    useEffect(() => {
       getData()
    })
    return(
        <View>
            <SearchBar />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;