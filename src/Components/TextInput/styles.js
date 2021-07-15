import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        padding: 10,
        justifyContent: "flex-end"
    },
    
    inputText: {
        width: '85%',
        height: 45,
        borderRadius: 6,
        backgroundColor: '#fff',
        paddingLeft: 40,
        borderWidth: 1,

    },

    icone: {
        position: 'absolute',
        left: 20,
    },

})

export default styles;