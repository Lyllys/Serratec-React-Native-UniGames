import { StyleSheet } from "react-native";
import {windowWidth , windowHeight } from '../../Helpers/dimensions'

const styles = StyleSheet.create({
    container: {
        width: windowWidth /1.25,
        height: windowHeight /16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'purple',
        borderRadius: 8,
        marginTop: 10
        
    },

    texto: {
        color: '#fff',
        fontSize: 20
    }
  

})

export default styles; 
