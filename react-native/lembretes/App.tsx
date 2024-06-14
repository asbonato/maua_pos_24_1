import { StyleSheet, TextInput, View, Text, Pressable, FlatList } from 'react-native';
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

interface Lembrete{
  id: string;
  texto: string;
}
export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])
  const adicionar = () => {
    const novoLembrete: Lembrete = {id: Date.now().toString(), texto: lembrete}
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete('')
  }
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Digite um lembrete...'
        value={lembrete}
        onChangeText={setLembrete}
      />
      <Pressable 
        style={styles.button}
        onPress={adicionar}>
        <Text style={styles.buttonText}>
          Salvar Lembrete
        </Text>
      </Pressable>
      <FlatList 
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={lembretes}
        renderItem={
          lembrete => (
            <View
              style={styles.listItem}>
              <Text style={styles.listItemText}>{lembrete.item.texto}</Text>
              <View
                style={styles.listItemButtons}>
                <Pressable>
                  <AntDesign
                    name='delete'
                    size={24} />
                </Pressable>
                <Pressable>
                  <AntDesign
                    name='edit'
                    size={24} />
                </Pressable>
              </View>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 4,
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3', //material design blue 500
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  list: {
    marginTop: 12,
    borderRadius: 4,
    borderWidth: 1, 
    borderColor: 'gray', 
    width: '80%',
    padding: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#f0f0f0',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    width: '70%',
    textAlign: 'center',
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  }
});
