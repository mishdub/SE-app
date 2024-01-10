import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import tw from 'twrnc';


const PetProfileScreen = ({ route, navigation }) => {
  const [petName, setPetName] = useState("Your Pet's Name"); // Default name
  const [animalType, setAnimalType] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [lastVaccinationDate, setLastVaccinationDate] = useState('');
  const [lastVetVisit, setLastVetVisit] = useState('');
  const [medications, setMedications] = useState('');
  const [allergies, setAllergies] = useState('');

  useEffect(() => {
    // Check if there are updated details from EditPetProfileScreen
    if (route.params) {
      setPetName(route.params.updatedPetName || "Your Pet's Name");
      setAnimalType(route.params.updatedAnimalType || '');
      setAge(route.params.updatedAge || '');
      setGender(route.params.updatedGender || '');
      setLastVaccinationDate(route.params.lastVaccinationDate || '');
      setLastVetVisit(route.params.lastVetVisit || '');
      setMedications(route.params.medications || '');
      setAllergies(route.params.allergies || '');
    }
  }, [route.params]);

  const navigateToEditScreen = () => {
    navigation.navigate('EditPetProfile', {
      petName,
      animalType,
      age,
      gender,
      lastVaccinationDate,
      lastVetVisit,
      medications,
      allergies,
    });
  };

  const navigateToFindVetScreen = () => {
    navigation.navigate('FindVetScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={navigateToEditScreen} style={styles.editButton}>
        <Text style={tw`text-2xl font-semibold pr-2 tracking-wide`}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.petImageContainer}>
        <Image
          style={styles.petImage}
          source={{ uri: 'https://placekitten.com/200/200' }} // Replace with the actual image source
        />
        {/* pet profile section */}
      </View>
      <View style={tw`bg-white rounded-lg mt-3 px-4`}>
        <Text style={tw`text-2xl p-3 tracking-wide font-bold`}>{petName}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{animalType || '---'}</Text>
          <Text style={styles.label}>Animal Type:</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{age || '---'}</Text>
          <Text style={styles.label}>Age:</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{gender || '---'}</Text>
          <Text style={styles.label}>Gender:</Text>
        </View>

        {/* Medical History Section */}
        <View style={styles.sectionTitle}>
          <Text style={tw`text-2xl p-3 tracking-wide font-bold`}>Medical History</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{lastVaccinationDate || '---'}</Text>
          <Text style={styles.label}>Last Vaccination Date:</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{lastVetVisit || '---'}</Text>
          <Text style={styles.label}>Last Vet Visit:</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{medications || '---'}</Text>
          <Text style={styles.label}>Medications:</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.value}>{allergies || '---'}</Text>
          <Text style={styles.label}>Allergies:</Text>
        </View>

        {/* Find Vet Button */}
        <TouchableOpacity onPress={navigateToFindVetScreen} style={styles.findVetButton}>
          <Text style={tw`text-2xl font-semibold pr-2 tracking-wide`}>Find a Vet Nearby</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  petImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 5,
  },
  findVetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },
});

export default PetProfileScreen;
