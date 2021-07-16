 import React from "react";
 import { ImageBackground } from "react-native";

 const Background = ({children}) => {
     return (
         <ImageBackground 
         source={require('../../imagens/background.png')} 
         style={{width: '100%' , height: '100%' , alignItems:"center" , justifyContent: "center"}} 
         resizeMode="cover">
             {children}
         </ImageBackground>
     )
 }

 export default Background; 