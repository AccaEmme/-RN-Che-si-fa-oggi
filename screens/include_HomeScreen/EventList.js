import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  NetInfo,
  Alert,
  Dimensions
} from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements';
import ElementoLista from './ElementoLista';

const eventi=require('./../../assets/datas/users.json');


export default class EventList extends Component {
  constructor(){
   super();

/*
   let {max_width, max_height} = Dimensions.get('window');
   console.log(max_width, max_height);
*/
   this.state={
    textValue:"Hello",
    switchValue:false,
    isConnected:true
   }
  }

  componentDidMount(){
	    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

	    NetInfo.isConnected.fetch().done(
	      (isConnected) => { this.setState({ status: isConnected }); }
	    );

   /*eventi = this.fetchData();*/
  }

   componentWillUnmount() {
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
   }

    handleConnectionChange = (isConnected) => {
            this.setState({ status: isConnected });
            console.log(`is connected: ${this.state.status}`);
    }

  fetchData(){
   fetch('http://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json() )
    .then( (response) => {
/*
	this.setState(
	 userDataSource: this.state.userDataSource.cloneWithRows(response)
	);
*/
	return response;
   });
  }

  onSubmit(){
   console.log('Input Submitted...');
  }

  onSwitchChange(value){
   this.setState({
	switchValue:value
    });


   Alert.alert(   // Works on both iOS and Android
     'Data Update',
     'Switch on/off data update',
     [
       {text: "Don't remind anymore", 	onPress: () => console.log('Ask me later pressed')},
       {text: 'Cancel', 		onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', 			onPress: () => console.log('OK Pressed')},
     ],
     { cancelable: false }
   )

  }

  render() {
    console.log('HELLO DEBUG LOG');
    return (
	<View style={styles.container}>

	 <View style={styles.header}>
	  <View style={styles.header_upper}>
	   <TextInput 
		placeholder="Ricerca qui"
		editable={true}
		maxLenght={40}
		autoCorrect={false}
		autoFocus={false}
		clearTextOnFocus={true}
		inlineImageLeft='search_icon'
		onSubmitEditing={this.onSubmit}
		style={{height: 30, width:Dimensions.get('window').width*70/100, borderColor: 'gray', borderWidth: 0, borderRadius: 10, backgroundColor: '#FFFFFF', color: '#c4c6c8'}}
		 />
	  </View>

	  <View style={styles.header_bottom} >
	   <View style={{flexDirection: 'row', justifyContent:"center"}}>
	    <Switch
		value={this.state.switchValue}
		onValueChange={(value) => this.onSwitchChange(value)}
		/>
	   </View>

	   <TouchableOpacity>
	   <View style={{alignItems: 'center', borderRadius: 10, padding: 10, shadowColor: '#2E9298', shadowOffset: { width: 0, height: 3}, shadowRadius: 10, shadowOpacity: 0.25, height: 50, width:50}} >
		<Image
		   source={require('./../../assets/images/refresh.png')}
		   style={[styles.button, this.state.isConnected==true ? {backgroundColor:'transparent'}:{backgroundColor:'red'} ]}
		 />
	   </View>
	   </TouchableOpacity>
	  </View>
	 </View>


	 <ScrollView style={styles.body}>
	  {eventi.briefing.map( (elemento,index) => ( 
		/* dove user è il singolo utente e index è la posizione */
	   	/*<ElementoListaEventi componente={datiComponente} />*/
	    <ElementoLista key={index} componente={elemento} />
	  ) )}
	 </ScrollView>

	 <View style={styles.footer}>
	  <Text>Benvenuto in Primo, la mia prima app in React Native</Text>
	 </View>

	</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
/*    justifyContent: 'center',
    alignItems: 'center',*/
/*    backgroundColor: '#F5FCFF'*/
   backgroundColor: 'rgba(128, 128, 128, 0.4)',

  },

  header: {
   height:130,
   borderBottomWidth:1,
   borderColor:"black"
  },
  scrollviewstyle:{
   flex:1 			/* Prende tutto il resto dello schermo */
  },

  header_upper: {
   alignItems:"center",
   justifyContent:"center",
   borderWidth: 0,
   borderColor:"black"
  },

  header_bottom: {
   flexDirection: 'row',
   borderWidth: 0,
   borderColor:"black",
   alignSelf: 'flex-end',
   flex: 1
  },

  header_text: {
   color:"#009933", 		/* or rgb(0, 153, 51) */
   fontSize: 25
  },

  button: {
	padding: 10, margin: 5, height: 30, width: 30, resizeMode: 'stretch', borderRadius: 10
  },

});
