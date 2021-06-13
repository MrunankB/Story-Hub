import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
 WriteStory: {screen: WriteStoryScreen},
 ReadStory: {screen: ReadStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
         <MaterialIcons name="chrome-reader-mode" size={24} color="black" />)
        
      }
      else if(routeName === "ReadStory"){
        return(
         <FontAwesome5 name="readme" size={24} color="black" />
        )
        
      }
    }
  })
}
)


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
