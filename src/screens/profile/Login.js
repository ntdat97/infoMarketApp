import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {firebase} from '../firebase/config';
import {useStoreActions, useStoreState} from 'easy-peasy';
function Login({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useStoreState((state) => state.isLogged);
  const setIsLogged = useStoreActions((actions) => actions.setIsLogged);

  const onLoginPress = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            firebase.auth().onAuthStateChanged((user) => {});
            setIsLogged(true);
            navigation.navigate('ProjectTopTab');
          })
          .catch((error) => {
            error ==
            'Error: The password is invalid or the user does not have a password.'
              ? Alert.alert('Sai tên email hoặc mật khẩu')
              : alert(error);
          });
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          keyboardShouldPersistTaps="always"
          behavior="position"
          /* behavior={Platform.OS == 'ios' ? 'padding' : 'height'} */
        >
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/icon.png')}
              style={{height: 200, marginBottom: 20, marginTop: 40}}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text.replace(/\s+$/, ''))}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => onLoginPress()}
            style={{
              alignItems: 'center',
              marginTop: 40,
              borderColor: '#006A73',
              marginHorizontal: 40,
              paddingVertical: 12,
              backgroundColor: '#006A73',
              borderRadius: 20,
            }}>
            <Text style={styles.buttonTitle}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.footerView}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: '62%',
    width: '60%',
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flex: 1,
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});
export default Login;
