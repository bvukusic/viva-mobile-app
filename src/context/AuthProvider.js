import React, {useEffect, useState} from 'react';
import {postNote} from '../services/appointment.service';
import {storeTokens} from '../services/storageService';
export const AuthContext = React.createContext();
import {
  fetchAssignedDoctor,
  fetchAppointment,
  logInUser,
  fetchUser,
  postAssignedDoctor,
  signUpUser,
} from '../services/users.service';
import vivaStorage from '../services/vivaStorage';

export default function AuthProvider({children}) {
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  const [assignedDoctor, setAssignedDoctor] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkToken = async () => {
    const token = await vivaStorage.getValue('AccessToken');
    if (token) {
      await getUser(token);
      setUserToken(token);
    }
    setIsLoading(false);
  };

  const getUser = async token => {
    const userData = await fetchUser(token);
    // if (userData.status === 401) {
    //   signOut();
    // }
    await getUserDetails(token);

    setUser(userData);
  };

  const logIn = async (email, password) => {
    setIsLoading(true);
    const resp = await logInUser(email, password);
    setUser(resp.user);

    await getUserDetails(resp.token.access);

    setUserToken(resp.token.access);
    setIsLoading(false);

    storeTokens(resp.token.access, resp.token.refresh);
  };

  const signUp = async (
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  ) => {
    setIsLoading(true);
    const resp = await signUpUser(
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
    );
    setUser(resp.user);

    await getUserDetails(resp.token.access);

    setUserToken(resp.token.access);
    setIsLoading(false);

    storeTokens(resp.token.access, resp.token.refresh);
  };

  const getUserDetails = async token => {
    const assignedDoctorResponse = await fetchAssignedDoctor(token);
    const appointmentResponse = await fetchAppointment(token);

    setAppointment(appointmentResponse);
    setAssignedDoctor(assignedDoctorResponse);
  };

  const addAppointmentNote = async (note, appointmentId) => {
    await postNote(userToken, note, appointmentId);
    getUserDetails(userToken);
  };

  const assignDoctor = async doctorId => {
    await postAssignedDoctor(userToken, doctorId);
    getUserDetails(userToken);
  };

  const signOut = async () => {
    setUserToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        assignedDoctor,
        appointment,
        isLoading,
        userToken,
        checkToken,
        logIn,
        signUp,
        signOut,
        addAppointmentNote,
        assignDoctor,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
