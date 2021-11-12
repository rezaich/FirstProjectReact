import React, { Component } from "react";
import { Image, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View>
      <View style = {{ width:80, height: 80, backgroundColor: '#00cec9' }} />
      <Text>APP REZA</Text>
      <Home/>
      <Photo/>
      <TextInput style ={{borderWidth: 1}}/>
      <BoxGreen />
      <Profile/>
    </View>
  );
};

const Home = () => {
  return <Text>NEW HOME</Text>;
};

const Photo = () => {
  return (
    <Image 
    source={{ uri: 'https://placeimg.com/100/100/tech'}} 
    style ={{ width:100, height: 100 }} 
   />
  ); 
};

class BoxGreen extends Component {
  render(){
    return <Text>INI COMPONENT dari Class</Text>;
  };
};

class Profile extends Component {
  render(){
    
    return(
      <View>
        <Image
        source = {{ uri: 'https://placeimg.com/100/100/animals' }}
        style = {{ width:100, height: 100 }}
        />
        <Text>
          Ini Kucing Foto
        </Text>
      </View>
    );
  }
}

export default App;