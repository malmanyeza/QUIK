import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,Dimensions, ImageBackground } from 'react-native';

const {width,height} = Dimensions.get('window')

const GetMore = () => {
  return (
    <View>
        <Text style={styles.header}>Get more with QUIK </Text>
    <View style={styles.container}>
        
      <View style={styles.columnOne}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground resizeMode='contain' source={require('../../assets/images/bike.jpg')} style={styles.buttonImage} >
            <Text style={styles.heading}>QUIK</Text>
            <Text style={styles.buttonText}>Some Text</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground resizeMode='cover' source={require('../../assets/images/din.jpg')} style={styles.buttonImage} >
            <Text style={styles.heading}>QUIK</Text>
            <Text style={styles.buttonText}>Some Text</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.columnTwo}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground resizeMode='contain' source={require('../../assets/images/sedan_7240765cf3.png')} style={styles.buttonImage} >
            <Text style={styles.heading}>QUIK</Text>
            <Text style={styles.buttonText}>Some Text</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground resizeMethod='contain' source={require('../../assets/images/din.jpg')} style={styles.buttonImage}>
            <Text style={styles.heading}>QUIK</Text>
            <Text style={styles.buttonText}>Some Text</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginTop: 20,
    height:'80%'
  },
  columnOne: {
    width:'45%',
    marginRight: 10,
  },
header:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginLeft: 20,
    marginTop: 20
},
columnTwo: {
    width:'45%',
    paddingTop:30
},
  button: {
    height: height*0.35,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
  heading: {
    margin:10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonText: {
    fontSize: 18,
    color: '#555',
    position:'absolute',
    bottom:10,
    left:10
  },
});

export default GetMore;
