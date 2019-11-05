import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  day: {
    color:'blue',
    textAlign:'center',
    fontSize: 20,
  },
});

const Card = (props) => {
  return(
    <View>
      <Text style={styles.day}> {props.day}</Text>
      <Text style={styles.day}> {props.name}</Text>
      <Text style={styles.day}> {props.content}</Text>
    </View>
  );
}

export default Card;
