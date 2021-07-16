  
import React, { createContext, useState } from 'react';
// USUARIO: { email, premium, idade, nome }
const estadoGlobalInicial = {
  usuario: null,
  login: () => {},
  logout: () => {},
};

export const UsuarioLogado = createContext(estadoGlobalInicial);

export const UsuarioLogadoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  return (
    <UsuarioLogado.Provider
      value={{
        usuario,
        login: (user) => {
          setUsuario(user);
        },
        logout: () => {
          setUsuario(null);
        },
      }}
    >
      {children}
    </UsuarioLogado.Provider>
  );
};