import React from "react";
import { Avatar } from 'react-native-elements';


const AvatarPerfil = ({tamanho, foto}) => {
    return(
        <Avatar
        size={tamanho}
          rounded
          source={{
              uri:foto
          }}
      />

    )
}; 

export default AvatarPerfil; 