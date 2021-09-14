import React, {useEffect, useState, useContext} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../../context/AuthProvider';
import LargeButton from '../../buttons/LargeButton/LargeButton';
import styles from './FindDoctor.style';
import LinearGradient from 'react-native-linear-gradient';
import {fetchDoctorList} from '../../../services/users.service';

const FindDoctor = () => {
  const {userToken, assignDoctor} = useContext(AuthContext);
  const [doctorList, setDoctorList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    const doctorListResponse = await fetchDoctorList(userToken);
    setDoctorList(doctorListResponse);
  };

  const addDoctor = async () => {
    await assignDoctor(selectedId);
  };

  const RadioButton = ({selected, setSelectedId, item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.8}>
        <View
          style={[styles.doctorItem, selected && {backgroundColor: '#134074'}]}>
          <Text style={styles.doctor}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderItem = ({item}) => {
    return (
      <RadioButton
        item={item}
        selected={item.id === selectedId}
        setSelectedId={setSelectedId}
      />
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#134074', '#00bbe6']}
      style={styles.container}>
      <Text style={styles.explanationText}>
        Choose who you want to be your personal doctor.
      </Text>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={doctorList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={true}
          indicatorStyle="white"
        />
      </View>
      {selectedId && (
        <View style={styles.buttonContainer}>
          <LargeButton buttonAction={() => addDoctor()} title="Register" />
        </View>
      )}
    </LinearGradient>
  );
};

export default FindDoctor;
