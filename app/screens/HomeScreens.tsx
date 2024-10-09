import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  MapPinIcon,
} from 'react-native-heroicons/outline';

const users = [
  {
    id: 1,
    name: 'Brian Edward',
    location: 'Palau, Oceania',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Richard Will',
    location: 'Palau, Oceania',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Brian Edward',
    location: 'Palau, Oceania',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Richard Will',
    location: 'Palau, Oceania',
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    name: 'Brian Edward',
    location: 'Palau, Oceania',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Brian Edward',
    location: 'Palau, Oceania',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
];

const HomeScreens = () => {
  return (
    <ScrollView style={{backgroundColor: '#f1f8ff', height: '100%'}}>
      {/* Header with Search and Filter Icons */}
      <View style={styles.home_header}>
        <View style={styles.search_container}>
          <MagnifyingGlassIcon
            size={32}
            strokeWidth={2}
            color={'#696969'}
            style={{marginLeft: -5}}
          />
          <TextInput
            placeholder="Search Buddy..."
            style={styles.search_input}
          />
        </View>
        <TouchableOpacity style={{...styles.filter_icon}}>
          <AdjustmentsHorizontalIcon
            size={30}
            strokeWidth={2}
            color={'#051644'}
          />
        </TouchableOpacity>
      </View>

      {/* List of Users */}
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.user_card}>
            <Image source={{uri: item.imageUrl}} style={styles.user_image} />
            <View style={styles.user_info}>
              <Text style={styles.user_name}>{item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MapPinIcon size={20} color={'#696969'}  />
                <Text style={styles.user_location}>{item.location}</Text>
              </View>
            </View>
            <ChevronRightIcon size={24} color={'#000'} />
          </TouchableOpacity>
        )}
      />
      <Text></Text>
      
    </ScrollView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  home_header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  search_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 8,
    // padding: 10,
    paddingLeft: 20,
    marginRight: 8,
    height: 55,
  },
  search_input: {
    marginLeft: 5,
    fontSize: 20,
    color: '#000',
    flex: 1,
  },
  filter_icon: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  user_card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 6,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  user_image: {
    width: 51,
    height: 57,
    borderRadius: 5,
  },
  user_info: {
    flex: 1,
    marginLeft: 12,
  },
  user_name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  user_location: {
    fontSize: 14,
    color: '#555',
    marginLeft: 3
  },
});
