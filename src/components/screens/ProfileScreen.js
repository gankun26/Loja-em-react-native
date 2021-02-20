import React from 'react';
import {View, Text, Image, Button} from 'react-native';

//renderiza a imagem do menu lateral
export default class ProfileScreen extends React.Component{
    static navigationOptions ={
        drawerLabel: 'Profile',
        drawerIcon: ({focused, tintColor}) => (
            <Image
               source={require('../imagens/pug.jpg')}
               style={{width:50, height:50}}
            />
         ),
    }

    //renderiza o conteudo da pagina
    render(){
        return(
          <View style={{flex:1, justifyContent:'center'}}>
              <View style={{margin:80}}>
                  <Image source={require('../imagens/pug.jpg')}></Image>
              </View>

              <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize:50}}>Tela perfil</Text>
              </View>

              <View style={{margin:20}}>
                  <Button
                     onPress={() => this.props.navigation.navigate('Setting')}
                     title="setting"
                   />
              </View>
          </View>
        );
    }
}