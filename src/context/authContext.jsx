import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axiosInstance from '../utils/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setuser(JSON.parse(token));
    }
  }, []);
  const register = useCallback(async (values, actions) => {
    try {
      const { confirmpassword, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      setuser(res.data);
      actions.resetForm();
      localStorage.setItem('token', JSON.stringify(res.data));
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  });
  const login = useCallback(async (values, actions) => {
    try {
      const res = await axiosInstance.post('login', values);
      setuser(res.data);
      actions.resetForm();
      localStorage.setItem('token', JSON.stringify(res.data));
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  });
  const logout = useCallback(() => {
    localStorage.clear();
    setuser(null);
  });
  const value = useMemo(
    () => ({
      login,
      register,
      user,
      logout,
    }),
    [login, register, user, logout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
