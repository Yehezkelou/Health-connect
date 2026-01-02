import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingHorizontal: 15,
  
  },
  title: {
    fontSize: 36,
    fontFamily: 'Baloo-Bold',
  
    top:150,
  },
  logo:{
    width:200, 
    height:100,
    
  }
});