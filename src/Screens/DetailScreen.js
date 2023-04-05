import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailScreen = (props) => {
    return(
        <View>
            <Text>This is the Detail Screen</Text>
            <Text>{props.route.params.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
});

export default DetailScreen;