import React from 'react';
import {View, Text, Image, Button} from 'react-native';

//renderiza a imagem do menu lateral
export default class SettingScreen extends React.Component{
    static navigationOptions ={
        drawerLabel: 'Setting',
        drawerIcon: ({focused, tintColor}) => (
            <Image
               source={require('../imagens/config.png')}
               style={{width:50, height:50}}
            />
         ),
    }

    //renderiza o conteudo da pagina
    render(){
        return(
          <View style={{flex:1, justifyContent:'center'}}>
              <View style={{margin:80}}>
                  <Image source={require('../imagens/config.png')}></Image>
              </View>

              <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize:50}}>Configurações</Text>
              </View>

              <View style={{margin:20}}>
                  <Button
                     onPress={() => this.props.navigation.navigate('Home')}
                     title="home"
                   />
              </View>
          </View>
        );
    }
}