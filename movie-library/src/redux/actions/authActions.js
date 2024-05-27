import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const loginUser = (userData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', userData);
    const { token } = res.data;
    // localStorage.setItem('jwtToken', token);
    // const decoded = jwtDecode(token);
    // dispatch(setCurrentUser(decoded));
    navigate('/');
  } catch (error) {
    console.error(error);
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: decoded,
  };
};

export const signupUser = (userData, navigate) => async (dispatch) => {
  try {
    await axios.post('http://localhost:5000/api/auth/signup', userData);
    dispatch(loginUser({ email: userData.email, password: userData.password }, navigate));
  } catch (error) {
    console.error(error);
  }
};
