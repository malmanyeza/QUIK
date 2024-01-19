import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Dummy data for locations
const dummyLocations = [
  'New York, NY, USA',
  'Los Angeles, CA, USA',
  'Chicago, IL, USA',
  'Houston, TX, USA',
  'Phoenix, AZ, USA',
  'Philadelphia, PA, USA',
  'San Antonio, TX, USA',
  'San Diego, CA, USA',
  'Dallas, TX, USA',
  'San Jose, CA, USA',
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleSearch = (query) => {
    const filtered = dummyLocations.filter((location) =>
      location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#748487" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your destination"
          placeholderTextColor="#748487"
          onChangeText={(text) => {
            setSearchQuery(text);
            handleSearch(text);
          }}
          value={searchQuery}
        />
      </View>
      {filteredLocations.length > 0 && (
        <FlatList
          data={filteredLocations}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.locationItem}>
              <Text style={styles.locationText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE6ED',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,   
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#748487',
  },
  locationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDE6ED',
    paddingVertical: 20,
  },
  locationText: {
    fontSize: 16,
    color: '#748487',
  },
});

export default SearchBar;
