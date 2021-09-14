import axiosAPI from './axiosApi';

export const logInUser = async (email, password) => {
  try {
    const response = await axiosAPI.post('/users/auth/login/', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (err) {
    console.warn('Login error: ', err.response.data);
    return err.response.data;
  }
};

export const signUpUser = async (
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
) => {
  try {
    const response = await axiosAPI.post('/users/users/', {
      email: email,
      password: password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
    });
    return response.data;
  } catch (err) {
    console.warn('Login error: ', err.response.data);
    return err.response.data;
  }
};

export const fetchUser = async token => {
  try {
    const response = await axiosAPI.get('/users/users/', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.warn('Assigned doctor error: ', err.response.data);
    return err.response.data;
  }
};

export const fetchAssignedDoctor = async userToken => {
  try {
    const response = await axiosAPI.get('/users/patient-has-doctor/', {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.warn('Assigned doctor error: ', err.response.data);
    return err.response.data;
  }
};

export const postAssignedDoctor = async (token, doctorId) => {
  try {
    const response = await axiosAPI.post(
      '/users/patient-has-doctor/',
      {
        doctor: doctorId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (err) {
    console.warn('Assigned doctor error: ', err.response.data);
    return err.response.data;
  }
};

export const fetchDoctorList = async token => {
  try {
    const response = await axiosAPI.get('/users/doctor-list/', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.warn('List doctor error: ', err.response.data);
    return err.response.data;
  }
};

export const fetchAppointment = async userToken => {
  try {
    const response = await axiosAPI.get('/appointments/patient-appointment/', {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.warn('Has appointment error: ', err.response.data);
    return err.response.data;
  }
};
