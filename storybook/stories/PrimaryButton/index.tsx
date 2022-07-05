import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import KeyPrint from '../icons/KeyPrint';

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  icon?: any;
}

const PrimaryButton: React.FC<Props> = ({ onPress, text, style, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <LinearGradient
        style={styles.buttonGradient}
        colors={['#63B6FF', '#1792FF', '#046DE8']}
        locations={[0.0, 0.5, 1]}
        start={{ x: 0.6, y: 1.5 }}
        end={{ x: 0.4, y: -0.5 }}
      >
        {icon}
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonGradient: {
    borderRadius: 6,
    height: 48,
    width: 296,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'THICCCBOI_ExtraBold',
    alignItems: 'center',
    padding: 12,
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0,
  },
});

export default PrimaryButton;
