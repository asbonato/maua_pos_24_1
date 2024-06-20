import { StyleSheet, FlatList, View, Button, TextInput, Text } from 'react-native';
import { useState } from 'react'
import { API_KEY } from '@env'
//crie um arquivo .env na mesma pasta do seu App.js
//coloque lá sua API_KEY
//não se esqueça de configurar o babel.config.js
//instale o .env com npm i -D react-native-dotenv
//inclua a entrada .env no seu .gitignore

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q="
  const apiKey =  `${API_KEY}`
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="Ok"
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={
          previsao => (
            <Text>{JSON.stringify(previsao)}</Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
