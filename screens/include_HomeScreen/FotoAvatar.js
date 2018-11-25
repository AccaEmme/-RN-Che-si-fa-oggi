import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class FotoAvatar extends React.Component{
 onPress(){
  console.log('Area pressed');
 }

 render(){
  return(
   <TouchableOpacity onPress={this.onPress} style={styles.containerPic} >
    <View>
     <Image style={styles.photo} source={this.props.percorsoImmagine} />
    </View>
   </TouchableOpacity>
  );
 }
}

 const styles = StyleSheet.create({
  containerPic:{
   alignItems:"center",
   justifyContent:"center",
   width: 62,
   height:62,
   borderRadius:31, 	/* rendo il contenitore della foto circolare */
   borderWidth:2,
   borderColor: "#dcf5e9",
   zIndex:1,
   overflow: "hidden" 	/* nasconde ciò che sborda dal contenitore */
  },

  photo:{
   flex:1, 		/* si deve poter adattare al conenitore*/
   resizeMode:"contain" /* andrà dentro al contenitore */
  }
 });
