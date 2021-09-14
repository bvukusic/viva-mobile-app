import React, {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';
import {format, parse} from 'date-fns';
import {AuthContext} from '../../../context/AuthProvider';
import LargeButton from '../../buttons/LargeButton/LargeButton';
import Notes from '../Notes/Notes';
import styles from './Appointment.style';
import LinearGradient from 'react-native-linear-gradient';

const Appointment = () => {
  const {assignedDoctor, appointment} = useContext(AuthContext);

  const [hasAppointment, setHasAppointment] = useState(
    appointment.appointment !== 'No appointment',
  );
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (hasAppointment) {
      setMessage(
        `Your appointment with with Dr. ${assignedDoctor.data.doctor.last_name} is coming up:`,
      );
      setAppointmentDate(
        parse(
          appointment.appointment.appointment_date,
          'yyyy-MM-dd',
          new Date(),
        ),
      );
      setNotes(appointment.appointment.notes);
    } else
      setMessage(
        `Feeling sick?\n\nBook an appointment with Dr. ${assignedDoctor.data.doctor.last_name}.`,
      );
  }, [hasAppointment]);

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#134074', '#00bbe6']}
      style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.appointmentMessage}>{message}</Text>
      </View>
      {!hasAppointment && (
        <View style={styles.buttonContainer}>
          <LargeButton
            buttonAction={() => setHasAppointment(!hasAppointment)}
            title="Book"
          />
        </View>
      )}
      {hasAppointment && appointmentDate !== '' && (
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {format(appointmentDate, 'MMMM do, yyyy')}
          </Text>
        </View>
      )}
      {hasAppointment && (
        <Notes notes={notes} appointmentId={appointment.appointment.id} />
      )}
    </LinearGradient>
  );
};

export default Appointment;
