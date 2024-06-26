import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function profil() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  // console.log('user data:', user); // Geliştirme sürecinde kullanıcı bilgisi kontrolü

  return (
    <View >
      <Text>Home</Text>
      <Pressable onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: hp(2),
    backgroundColor: '#000', // Çıkış butonu arka plan rengi
    paddingHorizontal: wp(1),
    paddingVertical: hp(1),
    borderRadius: 10,
  },
  logoutText: {
    color: '#FFF', // Çıkış butonu metin rengi
    fontSize: hp(1.8),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
