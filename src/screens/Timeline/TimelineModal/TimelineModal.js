import React, {useContext, useState} from 'react';
import {Modal, ImageBackground, TextInput, View} from 'react-native';
import {AuthContext} from '../../../context/AuthProvider';
import LargeButton from '../../../components/buttons/LargeButton/LargeButton';
import VivaSelectPicker from '../../../components/inputs/VivaSelectPicker/VivaSelectPicker';
import VivaTextInput from '../../../components/inputs/VivaTextInput/VivaTextInput';
import styles from './TimelineModal.style';
import {TimelineContext} from '../../../context/TimelineProvider';

const background = require('../../../assets/backgrounds/default-background.png');

export const moodChoices = [
  {
    label: 'Terrible',
    value: 'terrible',
  },
  {
    label: 'Bad',
    value: 'bad',
  },
  {
    label: 'Neutral',
    value: 'neutral',
  },
  {
    label: 'Good',
    value: 'good',
  },
  {
    label: 'Great',
    value: 'great',
  },
];

const TimelineModal = ({isModalVisible, closeModal}) => {
  const [note, setNote] = useState('');
  const [mood, setMood] = useState('');
  const {userToken} = useContext(AuthContext);
  const {addTimelineEntry} = useContext(TimelineContext);

  const handleSave = async () => {
    const now = new Date();
    const entryDateFormatted = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}`;
    await addTimelineEntry(userToken, mood, entryDateFormatted, note);
    closeModal();
  };

  return (
    <View style={styles.wrapper}>
      <Modal animationType="fade" transparent visible={isModalVisible}>
        <View style={styles.backgroundImage} source={background}>
          <VivaSelectPicker
            label="Mood"
            email
            values={moodChoices}
            value={mood}
            setValue={setMood}
          />
          <VivaTextInput label="Note" email value={note} setValue={setNote} />
          <View style={styles.buttonContainer}>
            {mood !== '' && note !== '' && (
              <LargeButton buttonAction={() => handleSave()} title="SAVE" />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TimelineModal;
