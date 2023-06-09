import React, { useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';



const DetailCard = (props) => {
   
    return(
        <View style={styles.cardViewStyle}>
            <TouchableOpacity onPress={() => props.navigationProp.navigate('Details', {
                title: props.title,
                id: props.id
            })}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{props.title}</Text>
            <Image style={{height: 150, width: 200, borderRadius: 10}} source={{uri: props.imageSource}} />
            <Text style={{marginTop: 4, fontWeight: 'bold', marginBottom: 40, color: 'white'}}>{`Rating: ${props.rating}`}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    cardViewStyle: {
        flexDirection: 'column',
        marginRight: 20,
        marginLeft: 10

    }
});

export default DetailCard;