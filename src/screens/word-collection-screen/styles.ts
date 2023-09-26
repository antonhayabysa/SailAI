import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dropZone: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: '#f0f0f0', 
    marginVertical: 20, 
    padding: 10,
    borderRadius: 5,
  },
  droppedWord: {
    backgroundColor: 'lightblue', 
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
