import React,{Component} from "react";
import { Text, View } from "react-native";


class MateriFlexBox extends Component {
    render() {
        return (
            <View style={{ flexDirection:'row' }} >
                <View style={{backgroundColor:'#ee5252',flex:1, height:50}}/>
                <View style={{backgroundColor:'#ff15',flex:1, height:50}}/>
                <View style={{backgroundColor:'#e1a',flex:1, height:50}}/>
                <View style={{backgroundColor:'#ee3',flex:1, height:50}}/>
            </View>
        );
    }
}


export default MateriFlexBox;