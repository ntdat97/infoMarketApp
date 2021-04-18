import React, {useState, useLayoutEffect} from 'react';
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
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselComponent from '../component/Carosel';
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
const ProjectInfo = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
      }}>
      <View style={{flex: 8, paddingHorizontal: 9}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            paddingVertical: 1.5,
          }}>
          Prescriptions Receipts
        </Text>
        <Text style={{paddingVertical: 1.5}}>Microsoft Corporation</Text>
        <Text
          style={{
            fontSize: 17,
            color: 'black',
            alignItems: 'center',
            paddingVertical: 3,
            color: '#454545',
          }}>
          $0.25/photo
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 3,
          }}>
          <Icon name="image" size={24} color="#8f8f8f" />
          <Text style={{color: '#454545', fontSize: 17}}>
            {' '}
            {'2000'} {'photos'}
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 3}}>
          <Icon name="clock-time-three-outline" size={24} color="#8f8f8f" />
          <Text style={{color: '#454545', fontSize: 17}}> Ngày 24/02/2021</Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileViewer')}>
          <Image
            source={require('../../../assets/microsoft.png')}
            style={{height: 35, width: 35}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ProjectDetail({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <CarouselComponent />
        <ProjectInfo navigation={navigation} />
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 9,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}>
          <Text style={styles.title}>Description</Text>
          <Text style={{lineHeight: 20}}>
            Means, in relation to a form, the latest version of the
            corresponding form appearing on the Website, as may be amended or
            replaced by the IESO from time to time and without notice to the
            Supplier.
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 9,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}>
          <Text style={styles.title}>How photos will be used</Text>
          <Text style={{lineHeight: 20}}>
            Means, in relation to a form, the latest version of the
            corresponding form appearing on the Website, as may be amended or
            replaced by the IESO from time to time and without notice to the
            Supplier.
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 9,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}>
          <Text style={styles.title}>How photos will be used</Text>
          <Text style={{lineHeight: 20}}>
            Career growth is encouraged through training and mentoring. Benefits
            include health and life insurance, flexible work schedules, paid
            sick and vacation leave, and retirement benefits. Responsibilities
            include but are not limited to: Interview clients, in person and/or
            via phone, to gather information for applications for public
            assistance programs. Process verification provided by clients to
            determine eligibility for public assistance programs. Explain
            program requirements to clients, including what information is
            needed to process their case and program requirements to which they
            may be subject. Identify resources in the community and make
            appropriate referrals. Answer inquiries from clients regarding
            general program rules as well as case-specific questions.
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 9,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              paddingVertical: 10,
              marginBottom: 5,
            }}>
            Contact requester
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 7,
              borderColor: '#006A73',
              borderWidth: 0.5,
              borderRadius: 5,
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <Text style={{color: '#006A73', fontWeight: '600'}}>
              Ask a question
            </Text>
          </TouchableOpacity>
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#f0f0f0',
              borderRadius: 5,
            }}>
            <Text>Photo right and responsibilities</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon
                name="clock-time-three-outline"
                size={24}
                color="#8f8f8f"
                style={{marginRight: 10}}
              />
              <Text>Photo can be use indefinitely</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon
                name="clock-time-three-outline"
                size={24}
                color="#8f8f8f"
                style={{marginRight: 10}}
              />
              <Text>Photo can be use indefinitely</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon
                name="clock-time-three-outline"
                size={24}
                color="#8f8f8f"
                style={{marginRight: 10}}
              />
              <Text>Photo can be use indefinitely</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon
                name="clock-time-three-outline"
                size={24}
                color="#8f8f8f"
                style={{marginRight: 10}}
              />
              <Text>Photo can be use indefinitely</Text>
            </View>
            <Text style={{paddingVertical: 5}}>
              Fot the complete rights and responsibilities, please read the
              Terms of Use.
            </Text>
          </View>
        </View>
      </ScrollView>
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
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProjectPhotoTaker')}
          style={{
            paddingVertical: 5,
            borderTopColor: '#f0f0f0',
            borderTopWidth: 0.5,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#006A73',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>Send photos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 7,
  },
});
