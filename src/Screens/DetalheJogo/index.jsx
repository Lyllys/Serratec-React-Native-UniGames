import React from "react";
import { Text } from "react-native";
import PlayCard from '../../Components/PlayCard'
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Route } from "@react-navigation/routers";


const DetalheJogo = () => {
    
    
    
    const item = useNavigationParam('item');
    
    
    
    return (
        <PlayCard nome={item}/>
    )
};

export default DetalheJogo; 