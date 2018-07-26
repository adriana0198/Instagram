import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
    console.log(props);
    const { navigation } = props;
    return (
        <View style={{ flex:1, justifyContent: 'center' }}>
             <Text>Componente SingIn</Text>
             <Button 
                 title="Navegar SignUp"
                 onPress={() => {
                     navigation.navigate('SignUp');
                  }} 
                  />
        </View>
    );
};
const SignUp = (props) => {
    const { navigation } = props;
    return(
        <View style={{ flex:1, justifyContent: 'center' }}>
            <Text>Componente SingUp</Text>
            <Button 
                title="Regresar"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    );
};

const RutasNoAutenticadas = StackNavigator(
    {
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen:SignUp,
  },
},
{
    headerMode: 'none',
  },
);

export { RutasNoAutenticadas };