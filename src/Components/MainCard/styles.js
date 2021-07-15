import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from '../../Helpers/dimensions';

const styles = StyleSheet.create({
    card: {
        width: windowWidth / 1.2,
        height: windowHeight / 2.2,
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
    },
    image: {
        position: "absolute",
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'grey',
        zIndex: 0,
        borderRadius: 20,
    },
    cardBody: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#0005',
        marginBottom: 15,
    },
    title: {
        zIndex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        zIndex: 1,
        color: '#fff',
        fontSize: 12,
    },
});

export default styles;