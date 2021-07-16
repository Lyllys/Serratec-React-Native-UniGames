import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#141414'
    },


    img: {
        width: 300,
        height: 300

    },

    containerCadastro: {
        flexDirection: "row",
        marginTop: 16
    },

    textoNovo: {
        color: "#fff",
        fontSize: 16
    },

    textoCadastreSe: {
        color: "#C8A2C8",
        fontSize: 16,
        fontWeight:"bold",
        textDecorationLine: "underline"
    }


})

export default styles;