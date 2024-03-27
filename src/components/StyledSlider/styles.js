import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#555',
  },
  slider: {
    flex: 1,
    width: '100%',
  },
  value: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 12,
    color: '#333',
  },
});

export { styles };