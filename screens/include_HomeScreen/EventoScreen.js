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
    <View style={styles.container_right} >
	<Text>Ciao!</Text>
    </View>
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
