import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function ChampTexte({ 
  placeholder, 
  value, 
  onChangeText,
  style,
  ...rest 
}: InputProps) {
  return (
    <TextInput 
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#999"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EDEDED',
    width: 335,
    height: 51,
    paddingLeft: 35,
    borderRadius: 4,
    fontFamily: 'Baloo-Bold',
  },
});