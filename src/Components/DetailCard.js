import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const DetailCard = (props) => {
    
    return(
        <View style={styles.cardViewStyle}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.title}</Text>
            <Image style={{height: 150, width: 200, borderRadius: 10}} source={{uri: props.imageSource}} />
            <Text style={{marginTop: 4, fontWeight: 'bold', marginBottom: 40}}>{`Rating: ${props.rating}`}</Text>
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