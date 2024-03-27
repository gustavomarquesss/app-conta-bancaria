import { useState } from 'react';
import { Text, View } from 'react-native';
import StyledButton from '../../components/StyledButton/index.js';
import StyledInput from '../../components/StyledInput/index.js';
import StyledPicker from '../../components/StyledPicker/index.js';
import StyledSlider from '../../components/StyledSlider/index.js';
import StyledSwitch from '../../components/StyledSwitch/index.js';
import { styles } from './styles';

export default function FormularioAberturaConta() {
  const [sexo, setSexo] = useState('Outro');
  const [escolaridade, setEscolaridade] = useState('Outro');
  const [saldo, setSaldo] = useState(500);
  const [brasileiro, setBrasileiro] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [dadosRegistrados, setDadosRegistrados] = useState({});

  const registrarDados = () => {
    setDadosRegistrados({
      nome,
      idade,
      sexo,
      escolaridade,
      saldo,
      brasileiro,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>
      <StyledInput label="Nome" onChangeText={(text) => setNome(text)} />
      <StyledInput label="Idade" onChangeText={(text) => setIdade(text)} />
      <StyledPicker
        label="Sexo"
        selectedValue={sexo}
        onValueChange={(value) => setSexo(value)}
        options={[
          { id: 1, option: 'Masculino' },
          { id: 2, option: 'Feminino' },
          { id: 3, option: 'Outro' },
        ]}
      />
      <StyledPicker
        label="Escolaridade"
        selectedValue={escolaridade}
        onValueChange={(value) => setEscolaridade(value)}
        options={[
          { id: 1, option: 'Ensino Fundamental' },
          { id: 2, option: 'Ensino Médio' },
          { id: 3, option: 'Graduação' },
          { id: 4, option: 'Pós-Graduação' },
          { id: 5, option: 'Outro' },
        ]}
      />
      <StyledSlider
        label="Saldo"
        value={saldo}
        onValueChange={(newValue) => setSaldo(newValue)}
        minimumValue={0}
        maximumValue={1000}
      />
      <StyledSwitch
        label="Brasileiro"
        value={brasileiro}
        onValueChange={(newValue) => setBrasileiro(newValue)}
      />

      <StyledButton buttonText="Cadastrar" onPress={registrarDados} />

      <View style={styles.registeredDataContainer}>
        <Text style={styles.dataTitle}>Dados Informados:</Text>
        <Text>Nome: {dadosRegistrados.nome || ''}</Text>
        <Text>Idade: {dadosRegistrados.idade || ''}</Text>
        <Text>Sexo: {dadosRegistrados.sexo || ''}</Text>
        <Text>Escolaridade: {dadosRegistrados.escolaridade || ''}</Text>
        <Text>Saldo: {dadosRegistrados.saldo || ''}</Text>
        <Text>Brasileiro: {dadosRegistrados.brasileiro ? 'Sim' : 'Não'}</Text>
      </View>
    </View>
  );
}
