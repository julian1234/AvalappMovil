import React,{Component} from 'react';
import{ View, Text,  StyleSheet, TextInput , TouchableOpacity } from 'react-native';



export default class LoginForm extends Component{

render(){
  
    return(
         
        <View style = {styles.container }>

    

           <TextInput
            placeholder = "username"   
            style={styles.input}>
          </TextInput>

           <TextInput
            placeholder = "password"   
              secureTextEntry    
            style={styles.input}>
           </TextInput>

           
          
             <TouchableOpacity 
              onPress ={() => {this.props.navigation.navigate('ManHigh_Users')}} 
              style={styles.buttonContainer}>
               <Text style = {styles.buttonText}>Login</Text>
             </TouchableOpacity>


           
        </View>

        );

         
     }
 }

const  styles = StyleSheet.create ({

          container:{
              padding:40
          
     },
        input:{
    
            height:40,
            backgroundColor:'white',
            marginBottom:20,
            textAlign:'center',
            borderColor: '#4FC3F7',
            borderWidth: 1,
            
         
        },
       
        buttonContainer:{
            backgroundColor: '#4FC3F7',
            paddingVertical:15

        },
        buttonText:{
           textAlign:'center',
           color:'white' 
        }

         
});
