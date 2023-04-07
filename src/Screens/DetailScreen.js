import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';

const DetailScreen = (props) => {

    const [results, setResults] = useState(null);

    const getImages = async(id) => {
       try {
        const response = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
                 headers: {
                     'Authorization': 'Bearer XTC1RAyu6yEe8O_mWzXy1T6BRp30m1IMT_Jk_zlPu1YmUeVAMgOppKIcfYONPWS5XdEf-EQ657dFWLYzL2R6ylA3FPyYQM_XzhetjDOpK59vUVGtoVCjbAhbYH4cYXYx'
                 },
             })
             setResults(response.data)
            }catch(error){
                console.log(error)
            }
         } 
      
         useEffect(() => {
            getImages(props.route.params.id)
         },[])
         console.log(results.photos);
    return(
        <View style={styles.mainView}>
            <Text>This is the Detail Screen</Text>
            <Text style={{color: 'white'}}>{props.route.params.title}</Text>
            {results.photos.map((photo) => {
                return (
                    <Image style={{height: 100, width: 200, marginVertical: 50, borderRadius: 50}} source={{uri: photo}}/>
                )
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DetailScreen;