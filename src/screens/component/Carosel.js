import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const pics = [
  {
    url: require('../../../assets/slider.jpg'),
    height: 300,
    width: 300,
  },
  {
    url: require('../../../assets/slider2.jpg'),
    height: 300,
    width: 300,
  },
  {
    url: require('../../../assets/slider3.jpg'),
    height: 300,
    width: 300,
  },
];
export default function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const windowWidthSlider = Dimensions.get('window').width;
  const renderItem = ({item, index}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height / 2.3;
    /*       const del = () => {
          const updatedItems = pics.filter((_item, itemIndex) => itemIndex !== index)
          updatePic(updatedItems)
          carouselRef.current.snapToItem(index - 1);
        } */
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#cfcfcf',
        }}>
        {/* <Icon name="delete" size={24} style={styles.delIcon} onPress={del} /> */}
        <Image
          style={{
            width: windowWidth,
            height: windowHeight,
            resizeMode: 'contain',
          }}
          source={item.url}
        />
      </View>
    );
  };
  const pagination = ({pics, index}) => {
    return (
      <Pagination
        dotsLength={pics.length}
        activeDotIndex={index}
        containerStyle={{
          backgroundColor: 'transparent',
          paddingVertical: 20,
          marginTop: -40,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'white',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Carousel
          layout={'default'}
          /* ref={carouselRef} */

          data={pics}
          sliderWidth={50}
          itemWidth={windowWidthSlider}
          renderItem={renderItem}
          onSnapToItem={(index) => setIndex(index)}
        />
      </View>
      <View>{pagination({index, pics})}</View>
    </SafeAreaView>
  );
}
