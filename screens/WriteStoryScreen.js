import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class TransactionScreen extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    render(){
        return(
            <SafeAreaProvider>
          <View style={styles.container}>
            <Header
            backgroundColor={'#211121'}
            centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20,fontWeight: 100, alignSelf:'center', textAlign:'center',fontFamily:'Ubuntu',borderBottomColor: '#211121'},
          }}
            />
            <TextInput
            style={styles.inputBox}
            placeholder="Write your title here"
            placeholderTextColor="white"
            onChangeText={title => {
                this.setState({ title: title });
              }}
              value={this.state.title}
            />

            <TextInput
            style={styles.inputBox}
            placeholder="Write your name here"
            placeholderTextColor="white"
            onChangeText={author=>{
                this.setState({author:author});
            }}
            value={this.state.author}
            />

            <TextInput
            style={styles.storyBox}
            placeholder="Write your story here"
            placeholderTextColor="white"
            onChangeText={story=>{
                this.setState({story:story});
            }}
            value={this.state.story}
            multiline={true}/>

            <TouchableOpacity 
            style={styles.submitButton}
            >
            <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
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
    inputBox: { 
      height: 40,
      borderWidth: 2,
       borderRadius:10,
      marginTop: 10,
     alignItems:'center',
     textAlign:'center',
      margin: 10,
      fontFamily:'Ubuntu',
      color:'white',fontWeight: 100,
      padding: 6, fontSize:15,
    }, 
    storyBox: { 
      height: 190,
      borderWidth: 2,
       borderRadius:10,
      marginTop: 10, fontFamily:'Ubuntu',
     alignItems:'center',
     textAlign:'center',
      margin: 10,
      color:'white',
      justifyContent:'center',
       fontSize:15,
      fontWeight: 100,
      padding: 6,
    },
    submitButton:{
      justifyContent: 'center',
      alignSelf: 'center', fontFamily:'Ubuntu',
      backgroundColor: '#211121',
      width: 80,
      height: 40,fontWeight: 100,
      color:'white',
     
    },
    submitButtonText:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 100,
      
      color:'white', fontFamily:'Ubuntu',
    }
  });
    