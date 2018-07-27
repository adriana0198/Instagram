import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Search extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Search</Text>
        <Button
          title="Publiacion"
          onPress={() => {
            navigation.navigate('Publicacion'); 
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Search;