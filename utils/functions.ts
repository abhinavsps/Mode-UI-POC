import {useColorScheme} from 'react-native';

export const isDarkMode = () => {
  return useColorScheme() === 'dark';
};
