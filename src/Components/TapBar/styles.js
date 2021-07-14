import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from '../../Helpers/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth / 1.2,
    },
    gradient: {
        borderRadius: 30,
        height: 60,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 'auto',
        padding: 5,
    },
});

export default styles;