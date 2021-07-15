import React from "react";
import { FlatList } from "react-native";
import SmallCard from "../../Components/SmallCard";

const DATA = [
    {
      id: 1,
      img: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/37355981/2c7b2da0d77a3706ab9263349039f5786d694fc5.jpg',
      title: 'Shop Titans',
      desc: 'Joguinho de lojinha pyka'
    },
    {
      id: 2,
      img: 'https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png',
      title: 'Stardew Valley',
      desc: 'Joguinho de fazendinha pyka'
    },
    {
      id: 3,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/2519/HLsWRYWFM5oIGLdJ8pwUqlPj.png?w=440',
      title: 'Warframe',
      desc: 'Joguinho de farmcrack pyka'
    },
    {
      id: 4,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/2519/HLsWRYWFM5oIGLdJ8pwUqlPj.png?w=440',
      title: 'Warframe',
      desc: 'Joguinho de farmcrack pyka'
    },
    {
      id: 5,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/2519/HLsWRYWFM5oIGLdJ8pwUqlPj.png?w=440',
      title: 'Warframe',
      desc: 'Joguinho de farmcrack pyka'
    },
  ];

  const renderSmallCard = ({ item }) => (
    <SmallCard title={item.title} img={item.img} desc={item.desc} />
  );
const Home = () => {
    return(
        <FlatList 
        showsHorizontalScrollIndicator={false}
          horizontal
          initialScrollIndex={1}
          data={DATA}
          renderItem={renderSmallCard}
          keyExtractor={item => String(item.id)} />
    )
};

export default Home;   