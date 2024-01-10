import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const EditPetProfileScreen = ({ route, navigation }) => {
  const [petName, setPetName] = useState(route.params.petName || '');
  const [animalType, setAnimalType] = useState(route.params.animalType || '');
  const [age, setAge] = useState(route.params.age || '');
  const [gender, setGender] = useState(route.params.gender || '');
  const [lastVaccinationDate, setLastVaccinationDate] = useState(route.params.lastVaccinationDate || '');
  const [lastVetVisit, setLastVetVisit] = useState(route.params.lastVetVisit || '');
  const [medications, setMedications] = useState(route.params.medications || '');
  const [allergies, setAllergies] = useState(route.params.allergies || '');

  const saveChanges = () => {
    // Save changes locally (You can update the state using a state management solution here)
    // For now, just navigate back with the updated parameters
    navigation.navigate('PetProfile', {
      updatedPetName: petName,
      updatedAnimalType: animalType,
      updatedAge: age,
      updatedGender: gender,
      lastVaccinationDate,
      lastVetVisit,
      medications,
      allergies,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }} // Replace with the actual image source
        style={styles.petImage}
      />
      <Text style={styles.title}>Edit Pet Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Pet's Name"
        value={petName}
        onChangeText={(text) => setPetName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Animal Type"
        value={animalType}
        onChangeText={(text) => setAnimalType(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Vaccination Date"
        value={lastVaccinationDate}
        onChangeText={(text) => setLastVaccinationDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Vet Visit"
        value={lastVetVisit}
        onChangeText={(text) => setLastVetVisit(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Medications"
        value={medications}
        onChangeText={(text) => setMedications(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        value={allergies}
        onChangeText={(text) => setAllergies(text)}
      />
      <Button title="Save Changes" onPress={saveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default EditPetProfileScreen;
