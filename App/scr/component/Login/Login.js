import React,{Component} from 'react';
import{ View, Text,  StyleSheet, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{

render(){
  
    return(
         
        <View style = {styles.container }>
          
           <View style = {styles.logoContainer}>
              <Image style={styles.logo}
              source={require('../../images/logoavalapp.png')}/>
           </View> 
           <View style = {styles.formContainer}>
               <LoginForm /> 
           </View>
           <Text style = {styles.title}> Avalapp Demo </Text>
       </View>

    
        );

         
     }
 }

const  styles = StyleSheet.create ({

          container:{
          backgroundColor: 'white', 
          flex: 1
     },
        title:{
    
          color:'#9E9E9E',
          fontSize: 10,
          fontWeight:'bold',
          textAlign:'center',
          

         
        },
        logoContainer:{
          
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center'  

        },

        logo:{
        
            width:200,
            height:200
       

        }
         
});

       



