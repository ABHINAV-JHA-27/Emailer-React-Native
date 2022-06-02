import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
    {/* <LinearGradient
    style={styles.container}
        colors={['#9d7ef3', '#c9efdc', '#f2bbf1']}
        start={{ x: 0, y: 1 }}
end={{ x: 0, y: 0 }}> */}
        <HomeScreen />
      {/* </LinearGradient> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  }  
});
