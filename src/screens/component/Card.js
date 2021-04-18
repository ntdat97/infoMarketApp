import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Card({navigation}) {
  const RenderStar = () => {
    const star = 4.5;
    var i;
    var starObject = [];
    for (i = 0; i < Math.floor(star / 1); i++) {
      starObject.push(<Icon name="star" color="#f9bc39" key={i} />);
    }
    star % 1 > 0 &&
      starObject.push(<Icon name="star-half" color="#f9bc39" key={star} />);
    starObject.push(
      <Text style={{fontSize: 12}} key={star + 1}>
        ({star})
      </Text>,
    );
    return <>{starObject}</>;
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProjectDetail')}
      activeOpacity={0.6}
      style={{
        display: 'flex',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15,
        flexDirection: 'column',
      }}>
      <View style={{padding: 1.5, justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../../assets/thumbnail.jpg')}
          resizeMode="cover"
          style={{
            height: 171,
            position: 'relative',
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            overflow: 'hidden',
          }}>
          <View style={styles.overlay} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontSize: 28,
                fontWeight: '700',
                paddingHorizontal: 12,
                paddingTop: 5,
              }}>
              Pictures of books in library
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Icon
                name="trophy-outline"
                color="white"
                style={{marginLeft: 12, marginRight: 7}}
                size={20}
              />
              <Text style={styles.price}>$0.25</Text>
              <Text style={styles.price}>/</Text>
              <Text style={styles.price}>Photo</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                right: 0,
                bottom: -90,
              }}>
              <Text
                style={{
                  color: '#00574a',
                  backgroundColor: '#e7f5f2',
                  borderTopLeftRadius: 100,
                  borderBottomLeftRadius: 100,
                  padding: 5,
                  paddingLeft: 20,
                  paddingRight: 10,
                }}>
                COMPLETED
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
          }}>
          <Text>MicroSoft Corporation</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              marginLeft: 8,
            }}>
            <RenderStar />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(70,70,70,0.5)',
  },
  price: {
    fontSize: 15,
    color: 'white',
    alignItems: 'center',
  },
});
