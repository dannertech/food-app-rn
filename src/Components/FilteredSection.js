import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import DetailCard from './DetailCard';

const FilteredSection = (props) => {

    return(
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10, marginLeft: 10}}>{props.title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props.data}
                renderItem={({item}) => {
                    return(
                        <DetailCard title={item.name} imageSource={item.image_url} rating={item.rating}/>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default FilteredSection;