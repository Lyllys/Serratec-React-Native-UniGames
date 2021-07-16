import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBar:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        padding: 10,
       
    },
    searchLeftIcon:{
        position: 'absolute',
        left: 20,
    },
   
    searchInput:{
        flex: 1,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#141414',
        paddingLeft: 40,
    },

});

export default styles; 