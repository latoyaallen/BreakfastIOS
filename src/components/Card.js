import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import formatDay from '../lib/formatDay';
import formatName from '../lib/formatName';
import formatContent from '../lib/formatContent';

const styles = StyleSheet.create({
  day: {
    color:'blue',
    textAlign:'center',
    fontSize: 20,
  },
  name: {
    fontSize: 15,
  },
  content: {
    fontSize: 15,
  },
});

const Card = (props) => {
  return(
    <View styles={styles.sectionContainer}>
      <Text style={styles.day}>{formatDay(props.day)}</Text>
      <Text style={styles.name}> {formatName(props.name)}</Text>
      <Text style={styles.content}>{formatContent(props.content)}</Text>
    </View>
  );
}

export default Card;
