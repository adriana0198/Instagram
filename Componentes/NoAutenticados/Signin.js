import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SingInForm from './Formas/SingInForm';


class SignIn extends Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <SingInForm />
                <Button title="SignUp"
                onPress={()=> { navigation.navigate('SignUp') } }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#90EE90',
        paddingHorizontal: 16 ,
    },
});


export default SignIn;