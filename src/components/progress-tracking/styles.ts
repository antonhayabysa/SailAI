import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0', 
  },
  topicContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ffffff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  topic: {
    fontSize: 16,
    color: '#333333', 
  },
});

export default styles;
