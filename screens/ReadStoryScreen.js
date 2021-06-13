import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
          <View style={styles.container}>
            <Header
            backgroundColor={'#211121'}
            centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20,fontWeight: 100, alignSelf:'center', textAlign:'center', fontFamily:'Ubuntu', borderBottomColor: '#211121'},
          }}
            />
           <Text style={styles.storytext}>Read stories by different Users Here</Text>
            <Text style={styles.developmenttext}>App is still in progress</Text>
            </View>
            </SafeAreaProvider>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212129',fontWeight: 100,
    },
    
    developmenttext:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 100,
      fontSize:20,
      fontFamily:'Ubuntu',
      marginTop: 5
    },
    storytext:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 100,
      fontSize:25,
     fontFamily:'Ubuntu',
      marginTop: 20
    }
  });
    