import { View, Text, Image, TextInput,StyleSheet, TouchableOpacity, Animated, Easing, Pressable, Alert ,ActivityIndicator} from 'react-native'
import React , { useEffect, useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import Loading from '../components/Loading';
import {useAuth} from "../context/authContext";


export default function SignUp() {

  const router = useRouter();
  const {register} = useAuth();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  //const auth = FIREBASE_AUTH;
    

  const handleRegister = async() =>{
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Sign Up', "Please fill all the fields!");
      return;
    }
    setLoading(true);

    let response = await register(emailRef.current, passwordRef.current);
    setLoading(false);

    console.log('got result', response);
    if(!response.success){
      Alert.alert('Sign Up', response.msg);
    }
  }

  return (
    <View style={styles.outerContainer}>
      <StatusBar style="dark" />

      <View style={styles.imageContainer}>
        <Image style={styles.logoImage} resizeMode='contain' source={require('../assets/images/mobillogo.jpg')} />
      </View>

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Create an account</Text>
        <Text style={{fontSize: hp(2), textAlign: 'center',     marginBottom: hp(2)}} resizeMode='contain'>Enter your email to sign up for this app</Text>

        <View>
          <View style={styles.inputWrapper}>
            <Octicons name="mail" size={24} color="black" />
            <TextInput 
              onChangeText={value=>emailRef.current=value}
              style={styles.input}
              placeholder="email@domain.com"
              placeholderTextColor="#A9A9A9"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Octicons name="lock" size={24} color="black" />
            <TextInput 
              onChangeText={value=>passwordRef.current=value}
              style={styles.input}
              placeholder="password"
              placeholderTextColor="#A9A9A9"
              secureTextEntry={true}
            />
          </View>

          
          <View>
            {loading? (
              <Loading size="small" color="#000" />
            ) : (
              <TouchableOpacity onPress={handleRegister} style={styles.button}>
                <Text style={styles.buttonText}>Sign up with email</Text>
              </TouchableOpacity>
            )}
          </View>

          

          <Text style={styles.continueText}>-or continue with-</Text>

          <TouchableOpacity style={styles.googlebutton}>
            <MaterialCommunityIcons name="google" style={styles.googleIcon} />
          </TouchableOpacity>

          <View >
            <Pressable onPress={() => router.push('signIn')}>
              <Text style={styles.accountText}>Already have an account?</Text>
            </Pressable>
          </View>


        

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8', 
    justifyContent: 'flex-end', // Alt yarıya itme
    alignItems: 'center',
  },
  container: {
    width: wp(100), // ekran genişliği
    height: hp(67), // ekran yüksekliği
    paddingTop: hp(5),
    paddingHorizontal: wp(5),
    backgroundColor: '#D3D3D3', // Gri arka plan rengi
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    paddingBottom: hp(5), // Alt boşluk ekleme
  },
  imageContainer: {
    position: 'absolute',
    top: hp(22), // Yukarıdan boşluk
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1, 
  },
  logoImage: {
    height: hp(20), 
  },
  welcomeText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    color: '#000',
  },
  inputWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: hp(2), 
    backgroundColor: '#F5F5F5', 
    borderRadius: 10, 
    paddingHorizontal: wp(4), 
    paddingVertical: hp(1.5),
  },
  input: {
    fontSize: hp(2),
    flex: 1,
    marginLeft: wp(1),
    color: '#000', 
  },
  button: {
    backgroundColor: '#FFA500', 
    paddingHorizontal: wp(2), 
    paddingVertical: hp(1.2), 
    borderRadius: 10, 
    marginTop: hp(2), 
  },
  buttonText: {
    fontSize: hp(2), 
    color: '#FFF',
    fontWeight: 'bold', 
    letterSpacing: 1, 
    textAlign: 'center', 
  },
  continueText: {
    marginTop: hp(2), 
    fontSize: hp(2),
    textAlign: 'center',
    
  },
  googlebutton: {
    marginTop: hp(2), 
    backgroundColor: '#FFF', 
    paddingHorizontal: wp(1), 
    paddingVertical: hp(1), 
    borderRadius: 10, 
  },
  googleIcon: {
    marginRight: wp(2), // İkon ve metin arasında boşluk ekleyin
    alignSelf: 'center', // Metin ile aynı hizada olmasını sağlar
    fontSize:18,
  },
  accountText:{
    marginTop: hp(2), 
    color:'#000080',
    textAlign: 'center',
  }
  
});