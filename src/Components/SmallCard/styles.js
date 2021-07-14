import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from '../../Helpers/dimensions';

const styles = StyleSheet.create({
    card: {
        width: 80,
        height: 80,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 2,
        justifyContent: 'flex-end',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 5,
    },
    image: {
        position: "absolute",
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'red',
        zIndex: 0,
        borderRadius: 10,
    },
    cardBody: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: 5,
        marginBottom: 5,
    },
    title: {
        zIndex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default styles;