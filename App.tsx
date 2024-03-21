/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './Navigation';
import {isDarkMode} from './utils/functions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import './services/i18next';
import Languages from './components/Languages';
import {useTranslation} from 'react-i18next';

export const MyContext = createContext<any>({});

function App(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const {i18n} = useTranslation();
  let isdarkMode = isDarkMode();
  const backgroundStyle = {
    backgroundColor: isdarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <MyContext.Provider value={{showModal, setShowModal}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={isdarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Navigation />
        </NavigationContainer>
        <Languages
          modalVisible={showModal}
          onItemPress={(value: string) => {
            i18n.changeLanguage(value);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      </SafeAreaProvider>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
