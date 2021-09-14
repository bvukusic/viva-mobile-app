import React, {useEffect, useState, useContext, useRef} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../../../context/AuthProvider';
import styles from './Notes.style';

const Notes = () => {
  const {addAppointmentNote, appointment} = useContext(AuthContext);
  const [newNote, setNewNote] = useState('');
  const flatlistReference = useRef(null);

  const submitNote = () => {
    if (newNote === '') return;
    addAppointmentNote(newNote, appointment.appointment.id);
    setNewNote('');
  };

  renderItem = ({item, index}) => {
    return (
      <View key={index} entry={item} style={styles.noteWrapper}>
        <View
          style={[
            styles.noteContainer,
            item.author === 'doctor'
              ? styles.noteContainerDoctor
              : styles.noteContainerPatient,
          ]}>
          <Text style={styles.note}>{item.note}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistReference}
        data={appointment.appointment.notes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={true}
        indicatorStyle="white"
        onContentSizeChange={() => {
          if (
            flatlistReference.current &&
            flatlistReference.current.scrollToIndex
          ) {
            flatlistReference.current.scrollToEnd({animating: true});
          }
        }}
        onScrollToIndexFailed={() => {}}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.noteInput}
          value={newNote}
          onChangeText={newValue => setNewNote(newValue)}
          placeholder="Enter note..."
          placeholderTextColor="#FFFF"
          onSubmitEditing={() => submitNote()}
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default Notes;
