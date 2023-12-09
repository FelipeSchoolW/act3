import React from 'react';
import { View, Text, } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Reset Password" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ marginBottom: 10 }}
          />
          <Button mode="contained" onPress={handleLogin} style={{ marginBottom: 15, backgroundColor: 'green' }}>
            ChangePassword
          </Button>
         
        </Card.Content>
      </Card>
    </View>
  );
};

export default AccountRecoveryPage;