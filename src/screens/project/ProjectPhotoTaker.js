import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  NativeModules,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
var ImagePicker = NativeModules.ImageCropPicker;
const imageLink = [
  {url: require('../../../assets/slider.jpg'), id: 1},
  {url: require('../../../assets/slider2.jpg'), id: 2},
  {url: require('../../../assets/slider3.jpg'), id: 3},
  {url: require('../../../assets/slider3.jpg'), id: 4},
  {url: require('../../../assets/slider3.jpg'), id: 5},
  {url: require('../../../assets/slider3.jpg'), id: 6},
];
const uploadPhoto = async (url, photo_uri) => {
  const data = new FormData();

  data.append('files', {
    uri: photo_uri,
    type: 'image/png',
    name: 'files',
  });

  //build payload packet
  var postData = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      somevar: 'whatever you want to pass',
    },
    body: data,
  };
  var listImage = [];
  return fetch(url, postData)
    .then((response) => response.json())
    .then((responseJson) => {
      listImage.push(responseJson);
      console.log(listImage);
    })
    .catch((error) => {
      alert('Có lỗi xảy ra, vui lòng thử lại (' + error + ')');
    });
};
const windowWidth = Dimensions.get('window').width;
export default function ProjectPhotoTaker({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [pics, setPics] = useState([]);
  const pickMultiple = () => {
    let data1 = pics;
    let length1 = data1.length;

    if (length1 <= 11) {
      ImagePicker.openPicker({
        multiple: true,
        waitAnimationEnd: false,
        includeExif: true,
        forceJpg: true,
        includeBase64: true,
        compressImageQuality: 0.2,
      })
        .then((images) => {
          let data = pics;
          let temp = Object.assign([], data);
          images.map((i) => {
            const id = nanoid(4);
            let imageTem = {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
              id: id,
              /*             base64: i.data, */
            };
            temp.push(imageTem);
          });
          let length = temp.length;
          console.log(temp);
          if (length <= 12) {
            data = temp;
            setPics(data);
            length = data.length;
            setTimeout(() => {}, 50);
          } else {
            alert('Tối đa 12 ảnh');
          }
        })
        .catch(() => null);
    } else {
      alert('Tối đa 5 ảnh');
    }
  };
  const takePic = () => {
    let data1 = pics;
    let length1 = data1.length;

    if (length1 <= 4) {
      ImagePicker.openCamera({
        cropping: false,
        width: 300,
        height: 400,
        includeBase64: true,
        compressImageQuality: 0.2,
      })
        .then((image) => {
          const id = nanoid(4);
          let imageTem = {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
            id: id,
          };
          let data = pics;
          data.push(imageTem);
          setPics(data);
          setTimeout(() => {}, 50);
        })
        .catch(() => null);
    } else {
      alert('Tối đa 5 ảnh');
    }
  };
  const _renderItem = ({item, index}) => {
    return (
      <View style={{padding: windowWidth * 0.024, flex: 0.5}}>
        <TouchableOpacity
          activeOpacity={0.7}
          opacity={0.1}
          style={{
            position: 'absolute',

            padding: 4,
            borderRadius: 50,
            top: 15,
            right: 20,
            zIndex: 999,
            backgroundColor: 'rgba(130, 130, 130, 0.8)',
          }}>
          <Icon name="window-close" size={25} color="white" />
        </TouchableOpacity>
        <Image
          source={item}
          key={index}
          style={{height: windowWidth * 0.45, width: windowWidth * 0.45}}
          resizeMode="cover"
        />
      </View>
    );
  };
  const submit = () => {
    pics.map((item, index) => {
      console.log(item.uri);
      uploadPhoto('http://192.168.2.137:1234/api/upload', item.uri);
    });
    /* setModalVisible(true) */
  };
  const ModalRender = () => {
    const navigate = () => {
      setModalVisible(!modalVisible);
      navigation.navigate('Project');
    };
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 10,

              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              style={{
                marginVertical: 12,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
                color: '#333333',
              }}>
              Thành công!
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: '#333333',
              }}>
              Hình ảnh của bạn đã được gởi. Bạn có thể tiếp tuc với những dự án
              khác
            </Text>
            <Pressable
              onPress={navigate}
              style={{
                paddingVertical: 5,
                paddingHorizontal: windowWidth * 0.27,
                borderRadius: 7,
                backgroundColor: '#006A73',
                marginTop: 13,
                marginBottom: 5,
              }}>
              <Text style={{color: 'white', fontSize: 15, paddingVertical: 3}}>
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={pics}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
        />
      </SafeAreaView>
      <View
        style={{
          padding: 12,
          backgroundColor: 'white',
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowColor: '#000',
          shadowOpacity: 0.22,
          elevation: 3,
          marginTop: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={takePic}
          style={{
            paddingVertical: 5,
            borderTopColor: '#f0f0f0',
            borderTopWidth: 0.5,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#006A73',
            flex: 1,
            marginRight: 15,
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pickMultiple}
          style={{
            paddingVertical: 5,
            borderTopColor: '#f0f0f0',
            borderTopWidth: 0.5,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#006A73',
            flex: 1,
            marginRight: 15,
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            Pick from library
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => submit()}
          style={{
            paddingVertical: 5,
            borderTopColor: '#f0f0f0',
            borderTopWidth: 0.5,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#006A73',
            flex: 1,
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>Submit</Text>
        </TouchableOpacity>
      </View>
      <ModalRender />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});
/*  const ImageList = ({link, key}) => {
    console.log(link);
    return (
      <FastImage
        style={{width: 200, height: 200}}
        key={key}
        source={{
          uri: link,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }; */
