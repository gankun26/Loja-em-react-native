import React from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';


//renderiza a imagem do menu lateral
export default class ProdutosScreen extends React.Component{
    static navigationOptions ={
        drawerLabel: 'Produtos',
        drawerIcon: ({focused, tintColor}) => (
            <Image
               source={require('../imagens/produtos.jpg')}
               style={{width:50, height:50}}
            />
         ),
    }

    //renderiza o conteudo da pagina
    render(){
        return(
          <View style={Styles.container}>
             <View style={Styles.header}>
                <Image  
                  source={require('../imgproduto/banner.jpg')}
                  style={Styles.image}
                />

                <View style={Styles.textContainer}>
                   <Text style={Styles.text}>PRODUTOS</Text>
                   <Text style={[Styles.text, {color:'#CECEFC'}]}>.</Text>
                   <Text style={[Styles.text, {color:'#CECEFC'}]}>ElETROS</Text>
                   <TouchableOpacity style={{position:'absolute', right:0, alignSelf:'center'}}>
                       <Text nome="filtro" size={20} color="black">
                           =
                       </Text>
                   </TouchableOpacity>
                </View>
             </View>

             <View  style={Styles.line}/>
               
               <ScrollView>
                   <Text style={Styles.text}>LANÇAMENTOS</Text>

                   <View style={{flexDirection:'row', justifyContent:'space-around'}} >
                    <TouchableOpacity style={Styles.containerProd}>
                        <Image
                         source={require('../../components/imgproduto/geladeira1.jpg')} 
                         style={Styles.produtoIMG}
                         />
                         <Text style={Styles.produtoTEXT}>Geladeira consul</Text>
                         <Text style={Styles.produtoTEXT}>R$: 1235,89</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.containerProd}>
                        <Image
                         source={require('../../components/imgproduto/maquinaLavar1.jpg')} 
                         style={Styles.produtoIMG}
                         />
                         <Text style={Styles.produtoTEXT}>Maquina de lavar LG</Text>
                         <Text style={Styles.produtoTEXT}>R$: 1345,89</Text>
                    </TouchableOpacity>

                   </View>

                   <View style={{flexDirection:'row', justifyContent:'space-around'}} >
                    <TouchableOpacity style={Styles.containerProd}>
                        <Image
                         source={require('../../components/imgproduto/liquidificador1.jpg')} 
                         style={Styles.produtoIMG}
                         />
                         <Text style={Styles.produtoTEXT}>Liquidificador Mundial</Text>
                         <Text style={Styles.produtoTEXT}>R$: 235,89</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.containerProd}>
                        <Image
                         source={require('../../components/imgproduto/liquidificador2.jpg')} 
                         style={Styles.produtoIMG}
                         />
                         <Text style={Styles.produtoTEXT}>Liquidificador Arno</Text>
                         <Text style={Styles.produtoTEXT}>R$: 345,89</Text>
                    </TouchableOpacity>

                   </View>

                   <View style={{flexDirection:'row', justifyContent:'space-around'}} >
                    <TouchableOpacity style={Styles.containerProd}>
                        <Image
                         source={require('../../components/imgproduto/maquinaLavar2.jpg')} 
                         style={Styles.produtoIMG}
                         />
                         <Text style={Styles.produtoTEXT}>Maquina de lavar Lg</Text>
                         <Text style={Styles.produtoTEXT}>R$: 1578,89</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.containerProd}>
                        <Image
                         source={require('../../components/imgproduto/geladeira2.jpg')} 
                         style={Styles.produtoIMG}
                         />
                         <Text style={Styles.produtoTEXT}>Geladeira Cadence</Text>
                         <Text style={Styles.produtoTEXT}>R$: 1835,89</Text>
                    </TouchableOpacity>

                   </View>
               </ScrollView>

          </View>
        );
    }
}

const Styles = StyleSheet.create({
   container:{
       flex:1,
       width:'100%',
       backgroundColor:'cyan',
   },
   header:{
       marginBottom:8,
   },
   image:{
       width:'100%'
   },
   textContainer:{
        flexDirection:'row',
        marginVertical:'5%',
        marginHorizontal:'5%'
   },
   text:{
        fontSize:25,
        marginHorizontal:'1%'
   },
   line:{
       borderBottomColor:'#D8D8D8',
       borderBottomWidth:2,
   },
   containerProd:{
       paddingVertical:'2%',
       alignItems:'center',
       justifyContent:'center',
   },
   produtoIMG:{
       width:130,
       height:130,
   },
   produtoTEXT:{
      fontSize:16
   }
});