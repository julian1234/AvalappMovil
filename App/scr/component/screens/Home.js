import React,{Component} from 'react';
import{ View, Text, TouchableOpacity , Image ,StyleSheet} from 'react-native';


export default class Home extends Component{

render(){
  
    return(
         
        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>

            <Text> Avalapp Funcionalidades </Text>

            <View style = {styles.logoContainer}>
              <Image style={styles.logo}
              source={require('../../images/logoavalar.png')}/>

             <Text> Avalapp </Text>

            <TouchableOpacity 
              onPress ={() => {this.props.navigation.navigate('ManHigh_Login')}}
              style={styles.buttonContainer}>
               <Text style = {styles.buttonText}>Login</Text>
             </TouchableOpacity>
            
            <TouchableOpacity 
              onPress ={() => {this.props.navigation.navigate('ManHigh_Users')}} 
              style={styles.buttonContainer}>
               <Text style = {styles.buttonText}>Menu</Text>
             </TouchableOpacity>


           </View> 
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
        
            width:100,
            height:100
       
        },
         buttonContainer:{

            height:10,
            backgroundColor:'#BDBDBD',
            marginBottom:10,
            borderColor: '#4FC3F7',
            borderWidth: 1

        },
        buttonText:{
           textAlign:'center',
           color:'white' 
        }
         
});
