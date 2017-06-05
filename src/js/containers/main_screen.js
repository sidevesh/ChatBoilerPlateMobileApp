'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RecentUsersListItem from '../components/recent_users_listitem';

class MainScreenComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {id: '123456789', name: 'Jane Doe', last: 'hiiii!'},
            {id: '1011121314', name: 'Janice Griffins', last: 'byee!'}
          ]}
          renderItem={({item}) => <RecentUsersListItem id={item.id} primaryText={item.name} secondaryText={item.last} onPress={()=>{this.props.showChatScreen({user_id: item.id})}}/>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showChatScreen: (user_id) => {
      Actions.chatScreen({chat_user_id: user_id});
    }
  }
}

const MainScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenComponent)

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});