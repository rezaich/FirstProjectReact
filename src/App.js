import React from "react";
import { ScrollView,  View } from "react-native";
import SampleComponent from "./pages/SampleComponent/index";
import StylingReactNativeComponent from "./pages/StylingComponent/index";
import MateriFlexBox from "./pages/FlexBox/index";
import PositionReactNative from "./pages/Position/index";

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent/>
        <StylingReactNativeComponent/> 
        <MateriFlexBox />
        <PositionReactNative/>
      </ScrollView>
    </View>
  );
};

export default App;