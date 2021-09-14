import axiosAPI from './axiosApi';

export const postNote = async (token, note, appointment_id) => {
  try {
    const response = await axiosAPI.post(
      '/appointments/notes/',
      {
        note: note,
        author: 'patient',
        appointment: appointment_id,
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
    console.warn('Post note error: ', err.response.data);
    return err.response.data;
  }
};
