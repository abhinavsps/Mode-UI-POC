import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {isDarkMode} from '../utils/functions';

const Details = () => {
  let isdarkMode = isDarkMode();
  const route = useRoute();
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: isdarkMode ? 'rgba(0, 0, 0, 0.9)' : 'white',
      }}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={{uri: route?.params?.data?.url}}
          style={{height: 340, width: '100%'}}
          borderRadius={20}>
          <TouchableOpacity
            style={{marginLeft: 10, marginTop: 10, alignSelf: 'flex-start'}}
            onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back.png')} />
          </TouchableOpacity>
          <View style={styles.heartView}>
            <Image source={require('../assets/heart.png')} />
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={[styles.title, {color: isdarkMode ? 'white' : 'black'}]}>
            {t(route?.params?.data?.title)}
          </Text>
          <Text style={{color: '#176FF2', fontWeight: '700'}}>
            {t('show_map')}
          </Text>
        </View>
        <Text
          style={{
            color: isdarkMode ? 'white' : '#606060',
            fontSize: 12,
            marginTop: 10,
          }}>
          {route?.params?.data?.rating}
        </Text>
        <Text style={{color: isdarkMode ? 'white' : '#3A544F', marginTop: 20}}>
          {t('desc')}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.bookNow}>{t('book_now')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  heartView: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 22,
    right: 20,
    bottom: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#176FF2',
    width: 223,
    height: 60,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  bookNow: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
