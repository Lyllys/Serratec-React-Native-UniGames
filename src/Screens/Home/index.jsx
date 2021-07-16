import React from "react";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import SmallCard from "../../Components/SmallCard";
import axios from "axios";

import { View } from "react-native";
import Header from "../../Components/Header";
import SearchBar from "../../Components/Search";
import Background from "../../Components/Background";
import styles from "./styles";
import MainCard from '../../Components/MainCard'


const Home = () => {

  const [games, setGames] = useState([]);

  const[gamesRelevancia , setGamesRelevancia]= useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const resposta = await axios.get('https://www.freetogame.com/api/games')
        setGames(resposta.data)
      } catch (erro) {
        console.log(erro);
      }
    }

    getGames();
  }, []);

  useEffect(() => {
    const getGamesRelevancia = async () => {
      try {
        const resposta = await axios.get('https://www.freetogame.com/api/games?category=anime')
        setGamesRelevancia(resposta.data)
      } catch (erro) {
        console.log(erro);
      }
    }

    getGamesRelevancia();
  }, []);

  return (

    
      <View>
        <View >
          <Header />
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item) => String(item.id)}
            data={games}
            renderItem={({ item }) =>
              <SmallCard
                title={item.title}
                img={item.thumbnail}
              />} />
        </View>

        <View style={styles.containerSearchBar}>
          <SearchBar />
        </View>
        
        <View style={styles.containerMainCard}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item) => String(item.id)}
            data={gamesRelevancia}
            renderItem={({ item }) =>
              <MainCard
                title={item.title}
                img={item.thumbnail}
                desc={item.short_description}
              />} />
        </View>
      </View>


      
  

  )
};

export default Home;