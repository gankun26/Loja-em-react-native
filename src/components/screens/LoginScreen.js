import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Button, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';



export default class LoginScreen extends React.Component{
    //renderiza a imagem no menu lateral
    static navigationOptions ={
        drawerLabel: 'Login',
        drawerIcon: ({focused, tintColor}) => (
            <Image
               source={require('../imagens/cadastro.png')}
               style={{width:50, height:50}}
            />
         ),
    }

   //renderiza os componentes na pagina
    render(){
         
        return(
          <KeyboardAvoidingView style={Styles.backgorund}>

              <View style={Styles.conatinerLogo}>
                <Image 
                   style={Styles.containerImage}
                   source={require('../imagens/cadastro.png')}
                />
              </View>

              <Animated.View style={[Styles.container]}>
                <TextInput
                   style={Styles.input}
                   placeholder='Email'
                   autoCorrect={false}
                   onChangeText={() =>{}}
                />

                <TextInput
                   style={Styles.input}
                   placeholder='Senha'
                   autoCorrect={false}
                   onChangeText={() =>{}}
                />
              </Animated.View>

              <TouchableOpacity style={Styles.btnSubmit} onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={Styles.submitText}>Acessar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.btnSubmit}>
                  <Text style={Styles.submitText}>Criar conta</Text>
              </TouchableOpacity>

          </KeyboardAvoidingView>
        );
    }
}

//estilização dos componentes, butoes, imagens e outros..
const Styles = StyleSheet.create({
    backgorund:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'cyan',
    },
    conatinerLogo:{
        flex:1, 
        justifyContent:'center',  
    },
    containerImage:{
        borderRadius:50,
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:5

    },
    input:{
        backgroundColor:'#fff',
        width:'90%',
        marginBottom:5,
        color:'#222',
        fontSize:18,
        borderRadius:7,
        padding:10,
    },
    btnSubmit:{
       backgroundColor:'black',
       width:'90%',
       height:45,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:7,
       marginBottom:5,
    },
    submitText:{
       color:'#fff',
       fontSize:18,
    }, 
});
