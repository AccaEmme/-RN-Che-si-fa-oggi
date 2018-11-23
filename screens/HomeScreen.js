import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements';

import EventList from './include/EventList';

export default class App extends Component {
  state = {
    index: 0,
    content:"<Text>List/Map</Text>",
  }
  
  updateIndex = (index) => {
    this.setState({index});
    if(index==0)
     //this.setState({content: {list_code} });
     this.setState( {content: "<EventList />"} );
   /* else if(index==1)
     this.setState({content: "<Text>Questa è il mio calendario!</Text>"});
    else
     //this.state.content = "Questa è la mappa";
     this.setState({content: "<Text>Questa è la mia mappa!</Text>"});
*/
  }
  
  render() {
    return (
      <View style={styles.container}>
       <ButtonGroup
        selectedBackgroundColor="gray"
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={['Lista', 'Calendario', 'Mappa']}
        containerStyle={{height: 30, borderRadius:50}} />

	<EventList />
       <View>
        {/*this.state.content*/}
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
marginTop: 10,
//    alignItems: 'center',
//    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
