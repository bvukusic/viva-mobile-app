import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {format, parse} from 'date-fns';
import styles from './TimelineEntry.style';

const TimelineEntry = ({mood, entry}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineAndIconContainer}>
        <View style={styles.line} />
        <View style={styles.iconContainer}>
          <View style={styles.icon}></View>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#134074', '#00bbe6']}
        style={styles.entryInfoContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {format(
              parse(entry.entry_date, 'yyyy-MM-dd', new Date()),
              'MMMM do, yyyy',
            )}
          </Text>
        </View>
        <View style={styles.feelingContainer}>
          <Text style={styles.feeling}>{entry.mood}</Text>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.note}>{entry.patient_note}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default TimelineEntry;
