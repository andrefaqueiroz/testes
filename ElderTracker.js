import { Button, StyleSheet, Text, View } from 'react-native';

export default function ElderTracker() {
  // Simulando que o "Given" (permissão e internet) já ocorreu
  // e o sistema resgatou a localização (When/Then).
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Elder Tracker</Text>
      <Text style={styles.subHeader}>Current Location</Text>
      
      <View style={styles.mapMock}>
        <Text>[ Map showing elder location ]</Text>
        <Text>(● Elder)</Text>
      </View>

      <Text>Last update: 2 minutes ago</Text>
      <Text>Latitude: 41.1579</Text>
      <Text>Longitude: -8.6291</Text>

      <View style={styles.buttonContainer}>
        <Button title="Refresh Location" onPress={() => {}} />
        <Button title="Emergency Call" color="red" onPress={() => {}} />
      </View>

      <Text style={styles.visibility}>Visible to: ✔ Caregivers ✔ Doctors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  mapMock: { backgroundColor: '#e0e0e0', padding: 20, alignItems: 'center', marginBottom: 20 },
  buttonContainer: { marginTop: 20, gap: 10 },
  visibility: { marginTop: 20, fontStyle: 'italic', color: 'gray' }
});