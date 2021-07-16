import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () =>{
    return (
        <View style={styles.searchBar}> 
            <TextInput 
                style={styles.searchInput}
            />
            <FontAwesome name='search' color='gray' size={20} style={styles.searchLeftIcon} />
        </View>
    );
}

export default SearchBar;