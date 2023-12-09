import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';

const LandingPage = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRegistration = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Its Your App!" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <Text style={{ marginBottom: 20, textAlign: 'center' }}>
            Have a great experience of the app!
          </Text>
          <Button mode="contained" onPress={goToLogin} style={{ marginBottom: 10, backgroundColor: 'green' }}>
            Login
          </Button>
          <Button mode="outlined" onPress={goToRegistration} style={{borderColor: 'green'}}>
            <Text style = {{color: 'green'}}>Register</Text>
            
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default LandingPage;