import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isDarkMode} from '../utils/functions';
import {optionList, popularList, recommendedList} from '../utils/data';
import {useTranslation} from 'react-i18next';
import {MyContext} from '../App';

const Home = () => {
  let isdarkMode = isDarkMode();
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('Location');
  const {t} = useTranslation();
  const {setShowModal} = useContext(MyContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isdarkMode ? 'rgba(0, 0, 0, 0.9)' : 'white',
      }}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text style={{marginLeft: 20, color: isdarkMode ? 'white' : 'black'}}>
            {t('Explore')}
            {'\n'}
            <Text style={{fontSize: 32, fontWeight: '500'}}>{t('Aspen')}</Text>
          </Text>
          <TextInput
            style={[
              styles.textInput,
              {color: isdarkMode ? 'black' : '#757575'},
            ]}
            value={value}
            onChangeText={text => setValue(text)}
            placeholder={t('placeholder')}
            placeholderTextColor={'#B8B8B8'}
          />
          <View style={{marginTop: 30}}>
            <ScrollView
              horizontal
              contentContainerStyle={{paddingHorizontal: 20}}
              showsHorizontalScrollIndicator={false}>
              {optionList.map((item, index) => (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    borderRadius: 18,
                    backgroundColor:
                      selected === item.title ? '#F3F8FE' : 'transparent',
                  }}
                  onPress={() => setSelected(item.title)}
                  key={index.toString()}>
                  <Text
                    style={{
                      color: selected === item.title ? '#176FF2' : '#B8B8B8',
                    }}>
                    {t(item.title)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{marginTop: 40}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: isdarkMode ? 'white' : 'black',
                }}>
                {t('Popular')}
              </Text>
              <Text style={{color: '#176FF2'}}>{t('See all')}</Text>
            </View>
            <ScrollView
              horizontal
              style={{marginTop: 20}}
              contentContainerStyle={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}>
              {popularList?.map((item, index) => (
                <ImageBackground
                  key={index.toString()}
                  style={{
                    height: 240,
                    width: 188,
                    marginHorizontal: 10,
                    justifyContent: 'flex-end',
                  }}
                  borderRadius={20}
                  source={{uri: item.url}}>
                  <View
                    style={[
                      styles.popularTitleContainer,
                      {backgroundColor: isdarkMode ? 'white' : '#4D5652'},
                    ]}>
                    <Text style={{color: isdarkMode ? 'black' : 'white'}}>
                      {t(item.title)}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.ratingContainer,
                      {
                        backgroundColor: isdarkMode ? 'white' : '#4D5652',
                      },
                    ]}>
                    <Text style={{color: isdarkMode ? '#4D5652' : 'white'}}>
                      {item.rating}
                    </Text>
                  </View>
                </ImageBackground>
              ))}
            </ScrollView>
          </View>
          <View style={{marginTop: 40}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 20,
                color: isdarkMode ? 'white' : 'black',
              }}>
              {t('Recommended')}
            </Text>
            <ScrollView
              horizontal
              style={{marginTop: 20}}
              contentContainerStyle={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}>
              {recommendedList?.map((item, index) => (
                <View key={index.toString()} style={styles.recommendItem}>
                  <Image
                    source={{uri: item.url}}
                    style={{width: 166, height: 102}}
                    borderRadius={16}
                  />
                  <Text style={{fontSize: 16, fontWeight: '600', marginTop: 4}}>
                    {t(item.title)}
                  </Text>
                  <Text style={{color: '#3A544F', marginLeft: 15}}>
                    {t('Hot Deal')}
                  </Text>
                  <View
                    style={[
                      styles.durationView,
                      {backgroundColor: isdarkMode ? 'white' : '#3A544F'},
                    ]}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: isdarkMode ? 'black' : 'white',
                      }}>
                      {t(item.duration)}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <Button title={t('Change_Language')} onPress={() => setShowModal(true)} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#F3F8FE',
    marginHorizontal: 20,
    height: 56,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  durationView: {
    position: 'absolute',
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: '#3A544F',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 14,
    top: 86,
    right: 10,
  },
  recommendItem: {
    padding: 4,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  popularTitleContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 12,
    marginLeft: 14,
    marginBottom: 10,
  },
  ratingContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 12,
    marginLeft: 14,
    marginBottom: 10,
  },
});
