import axiosAPI from './axiosApi';

export const fetchTimelineEntries = async userToken => {
  try {
    const response = await axiosAPI.get('/users/user-timeline-entries/', {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    console.warn('Login error: ', err.response.data);
    return err.response.data;
  }
};

export const postTimelineEntry = async (token, mood, date, note) => {
  try {
    const response = await axiosAPI.post(
      '/users/user-timeline-entries/',
      {
        mood: mood,
        entry_date: date,
        patient_note: note,
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
    console.warn('Login error: ', err.response.data);
    return err.response.data;
  }
};
