import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useAuth } from '../../context/authContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home() {
  
  
  return (
    <View >
    
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: hp(2),
    backgroundColor: '#000', // Çıkış butonu arka plan rengi
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: 10,
  },
  logoutText: {
    color: '#FFF', // Çıkış butonu metin rengi
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
