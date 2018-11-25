import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FotoAvatar from './FotoAvatar';

export default class ElementoLista extends React.Component{
 constructor(props){
  super(props);
  this.props.componente ={
   immagine:"",
   titolo:"",
   descrizione:"",
   data:"",
   gratuito:"",
   su_prenotazione:"",
  };
 }

 render(){
  return(
   <TouchableOpacity /*onPress={() => alert(this.props.componente.nome)}*/ onPress={() => this.props.navigation.navigate('Evento')} >
   <View style={styles.container} >
    {/*<Text>DDD {this.props.componente}</Text>*/}
    <View style={styles.container_left}>
     <FotoAvatar percorsoImmagine={this.props.componente.immagine} />
    </View>

    <View style={styles.container_right} >
     <Text>{"Nome: "		+ this.props.componente.nome}</Text>
     <Text>{"Cognome: "		+ this.props.componente.cognome}</Text>
     <Text>{"Codice utente: "	+ this.props.componente.id}</Text>
    </View>
   </View>
   </TouchableOpacity>
  );
 }
}

 const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor: 'rgba(128, 128, 128, 0.2)',
   alignItems:"center",
   /*justifyContent:"space-between",*/
   padding: 3,
   borderBottomWidth: 0.5,
   flexDirection: 'row', 		/* metto tutto su una riga. flex-direction: row|row-reverse|column|column-reverse|initial|inherit; */
   height: 90,				/* altezza riquadro */
  },

  container_left:{
   flexDirection: 'column',
   width:62,
   height:90,
   alignItems:"center",
   borderBottomWidth: 0,
  },

  container_right:{
   flexDirection: 'column'
  }
 });
