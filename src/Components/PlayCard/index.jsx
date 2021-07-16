import React from "react";
import { View, Text } from "react-native";

const PlayCard = ({nome , descricao}) => {
    return (
        <View>
<Text style={{color: 'white'}}>{nome}</Text>
<Text style={{color: 'white'}}>{descricao}</Text>
        </View>
        
    )
};

export default PlayCard; 