import { StyleSheet, FlatList, View, Button, TextInput, Text, Keyboard } from 'react-native';
import { useState } from 'react'
import { API_KEY } from '@env'
//crie um arquivo .env na mesma pasta do seu App.js
//coloque lá sua API_KEY
//não se esqueça de configurar o babel.config.js
//instale o .env com npm i -D react-native-dotenv
//inclua a entrada .env no seu .gitignore
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q="
  const apiKey =  `${API_KEY}`
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }
  const obtemPrevisoes = () => {
    setPrevisoes([])
    const target = endPoint + cidade + "&appid=" + apiKey
    console.log(target)
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes(dados["list"])
      Keyboard.dismiss()
    })
    .catch((err => console.log(err)))
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
          onPress={obtemPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={
          previsao => (
            <PrevisaoItem previsao={previsao}/>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
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
