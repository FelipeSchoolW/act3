import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const logout = () => {
    // Add any logout functionality here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Button
        title="Logout"
        onPress={logout}
        style={styles.logoutButton}
        color="#2ecc71" // Green color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9B388', // Green color background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // White color text
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default HomePage;
