import React from "react";
import { Image, StyleSheet, Text,  View } from "react-native";
import diluca from './diluc.jpg';

const StylingReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>STYLEING COMPONENT</Text>
        <View 
        style={{
          width:100, 
          height:100, 
          backgroundColor: '#74b9ff',
          borderWidth :2,
          borderColor: '#636e72',
          marginTop:20,
          marginStart:20
        }}
        />
        <View style={{margin:20, padding: 12,backgroundColor:'#F2F2F2',width:212,borderRadius:8 }}>
          <Image source={diluca} style={{width:180, height:100, borderRadius:8}}/>
          <Text style={{ width:100,color:'#2d3436' }}>DILUCCC</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize : 20,
      fontWeight : 'bold',
      color:'#636e72',
      margin:20
    }
  })

  export default StylingReactNativeComponent;