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
  input: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 18,
    color: '#333',
    borderColor: '#ccc',
  },
});

export { styles };