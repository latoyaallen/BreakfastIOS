import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import formatDay from '../lib/formatDay';
import formatName from '../lib/formatName';

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
      <Text style={styles.day}> {formatDay(props.day)}</Text>
      <Text style={styles.day}> {formatName(props.name)}</Text>
      <Text style={styles.day}> {props.content}</Text>
    </View>
  );
}

export default Card;
