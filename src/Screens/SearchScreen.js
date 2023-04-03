import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import FilteredSection from '../Components/FilteredSection';
import axios from 'axios';


const SearchScreen = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const [leastExpensive, setLeastExpensive] = useState([]);
    const [mediumExpensive, setMediumExpensive] = useState([]);
    const [mostExpensive, setMostExpensive] = useState([]);

    //get data
    async function getData(){
        if(term == ''){
        await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                'Authorization': 'Bearer XTC1RAyu6yEe8O_mWzXy1T6BRp30m1IMT_Jk_zlPu1YmUeVAMgOppKIcfYONPWS5XdEf-EQ657dFWLYzL2R6ylA3FPyYQM_XzhetjDOpK59vUVGtoVCjbAhbYH4cYXYx'
            },
            params: {
                location: 'atlanta',
                term: 'fried'
            }
        }).then((data) => {
            filterData(data.data.businesses)
            
        }).catch((error) => console.log(error))
    } else if(term.length >= 4){
        console.log("here");
        await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                'Authorization': 'Bearer XTC1RAyu6yEe8O_mWzXy1T6BRp30m1IMT_Jk_zlPu1YmUeVAMgOppKIcfYONPWS5XdEf-EQ657dFWLYzL2R6ylA3FPyYQM_XzhetjDOpK59vUVGtoVCjbAhbYH4cYXYx'
            },
            params: {
                location: 'atlanta',
                term: term
            }
        }).then((data) => {
            filterData(data.data.businesses)
            
        }).catch((error) => console.log(error))
    }
};
function filterData(dataParam){
  
    let leastExpensiveArray = [];
    let mediumExpensiveArray = [];
    let mostExpensiveArray = [];



    leastExpensiveArray = dataParam.filter((x) => x.price == '$');
    mediumExpensiveArray = dataParam.filter((x) => x.price == '$$');
    mostExpensiveArray = dataParam.filter((x) => x.price == '$$$');

    setLeastExpensive(leastExpensiveArray);
    setMediumExpensive(mediumExpensiveArray);
    setMostExpensive(mostExpensiveArray);

    
}
    
    useEffect(() => {
       getData()
    },[term]);
    return(
        <View>
            <SearchBar textChanged={(text) => {
                setTerm(text)
                }}/>
            <ScrollView>
            {leastExpensive.length > 0 ? <FilteredSection title="On a Budget" data={leastExpensive}/> : null}
            {mediumExpensive.length > 0 ? <FilteredSection title="In Between" data={mediumExpensive}/> : null}
            {mostExpensive.length > 0 ? <FilteredSection title="Expensive AF" data={mostExpensive}/> : null}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;