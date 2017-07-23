import React,{Component} from 'react';
import{ StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Users from './screens/Users';
import Login from './Login/Login';
import LoginForm from './Login/LoginForm';

export const HomeStack  =  StackNavigator ({
    ManHigh_home:{

        screen: Login

    },
    ManHigh_Users:{

        screen: Users

    },

   


})
