import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

export default function StyledSlider({
  label,
  value,
  onValueChange,
  minimumValue,
  maximumValue,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        value={value}
        step={50}
        onValueChange={onValueChange}
        minimumTrackTintColor="#ff6347" // alterei a cor para vermelho
        maximumTrackTintColor="#999" // alterei a cor para cinza
      />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
