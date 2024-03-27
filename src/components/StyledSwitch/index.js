import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

export default function StyledSwitch({ label, value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#ff6347' }} // alterei a cor da track para vermelho quando desligado e cinza quando ligado
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'} // mantive as cores do polegar
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
}
