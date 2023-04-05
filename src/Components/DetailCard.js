import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const DetailCard = (props) => {
    console.log(props);
    return(
        <View style={styles.cardViewStyle}>
            <TouchableOpacity onPress={() => props.navigationProp.navigate('Details', {
                title: props.title
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