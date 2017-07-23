import React,{Component} from 'react';
import{ View, Text,  StyleSheet, Image, TextInput , TouchableOpacity} from 'react-native';
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

       



