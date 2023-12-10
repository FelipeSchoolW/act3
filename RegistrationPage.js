import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Enter valid email address'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter valid name'),
  password: Yup.string()
    .min(8)
    .required('Enter your password')
    .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, 
    'Must contain minimum 8 characters, atlease one uppercase letter, a number and special chaaracter'),
  confirmPassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], 'Password do not match')
    .required('Re-Enter your password')
});

const showToast = (message = "Something wen't wrong") => {
  ToastAndroid.show(message, 3000);
};

async function test(credentials, navigation) {
  const response = await fetch('http://192.168.0.4:8000/api/register', {method: 'POST', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, body: credentials
})
const data = await response.json()

console.log(data)

if(response.status == 200) {
  Alert.alert("User created successfully", data.message)
     return (navigation.replace('Login'))
}

if(response.status == 404) return Alert.alert(data.message);
}

const RegistrationPage = ({ navigation }) => {
    
    const [showPass, setShowpass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
  
  const goToLanding = () => {
    navigation.navigate('Landing');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Formik
    initialValues={{ 
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  }}
  validationSchema={SignupSchema}

    onSubmit={async (values) =>{
      console.log(values)
      test(JSON.stringify(values), navigation)
    }}
    
    >

    {({values, touched, handleChange, handleBlur, handleSubmit, isSubmitting, errors}) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Register" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <TextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={ handleBlur('email')}
            style={{ marginBottom: 10 }}
          />
          {touched.email && errors.email && (
                <Text style={{color:'red'}} > {errors.email}</Text>
              )}
              <TextInput
            label="Name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={ handleBlur('name')}
            style={{ marginBottom: 10 }}
          />
          {touched.name && errors.name && (
                <Text style={{color:'red'}} > {errors.name}</Text>
              )}
          <TextInput
            label="Password"
            secureTextEntry={showPass}
            style={{ marginBottom: 20 }}
            right={
              <TextInput.Icon
              icon={showPass ?  "eye-off" : "eye"  }
              onPress={() => setShowpass(!showPass)}
              />
            }
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          {touched.password && errors.password && (
                <Text style={{color:'red'}} > {errors.password}</Text>
              )}
          <TextInput
            label="ConfirmPassword"
            secureTextEntry={showConfirmPass}
            style={{ marginBottom: 20 }}
            right={
              <TextInput.Icon
              icon={showConfirmPass ? "eye-off" : "eye"  }
              onPress={() => setShowConfirmPass(!showConfirmPass)}
              />
            }
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
          />
          {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={{ color: "red" }}> {errors.confirmPassword}</Text>
                )}
          <Button mode="contained" onPress={handleSubmit} style={{ marginBottom: 15, backgroundColor: 'green' }}>
            Register
          </Button>
          <Button mode="outlined" onPress={goToLanding} style={{ marginBottom: 15, borderColor: 'green' }}>
          <Text style = {{color: 'green'}}>Return to Landing</Text>
          </Button>
          
        </Card.Content>
      </Card>
    </View>
  )}
  </Formik>
  );
};

export default RegistrationPage;