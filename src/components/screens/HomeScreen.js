import React from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';

//renderiza a imagem do menu lateral
export default class HomeScreen extends React.Component{
    static navigationOptions ={
        drawerLabel: 'Home',
        drawerIcon: ({focused, tintColor}) => (
           <Image
              source={require('../imagens/home.jpg')}
              style={{width:50, height:50}}
           />
        ),
    }

    //renderiza o conteudo da pagina
    render(){
        return(
        
          <View style={Styles.background}>
              <View style={Styles.componentImage}>
                  <Image 
                  style={Styles.image}
                  source={require('../imagens/carrinho.png')}/>
              </View>

              <View style={Styles.Conteudo}>
                  <Text style={{fontSize:50}}>Tela Inicial</Text>
              </View>

              <View style={{alignItems:'center'}}>
                 <Text style={{marginBottom:50, fontSize:20}}>Bem vindo a nossa loja!</Text>
              </View>

              <TouchableOpacity style={Styles.Button} onPress={() => this.props.navigation.navigate('produtos')}>
                  <Text style={Styles.submitText}>Produtos</Text>
              </TouchableOpacity>
          </View>
        
        );
    }
}

const Styles = StyleSheet.create({
    Conteudo:{
        alignItems:'center',
        justifyContent:'center',
    },
    background:{
       backgroundColor:'cyan',
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
    },
     componentImage:{
       alignItems:'center',
     },
     image:{
         borderRadius:50,
     },
     Button:{
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