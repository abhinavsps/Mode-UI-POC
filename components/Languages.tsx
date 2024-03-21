import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {languages} from '../services/languages';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface LanguagesProps {
  modalVisible: boolean;
  onItemPress: (value: string) => void;
  onClose: () => void;
}

const Languages = ({modalVisible, onItemPress, onClose}: LanguagesProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 10,
          justifyContent: 'center',
        }}
        onPress={onClose}>
        <Pressable
          style={{
            height: '60%',
            backgroundColor: 'white',
            borderRadius: 6,
            paddingVertical: 20,
            width: '60%',
            alignSelf: 'center',
          }}>
          <ScrollView>
            {languages?.map((item, index) => (
              <TouchableOpacity
                onPress={() => onItemPress(item.key)}
                key={index.toString()}
                style={{
                  paddingVertical: 4,
                  borderTopWidth: 1,
                  borderTopColor: 'rgba(0, 0, 0, 0.4)',
                }}>
                <Text style={{textAlign: 'center', fontSize: 18}}>
                  {item.language}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}} />
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default Languages;

const styles = StyleSheet.create({});
