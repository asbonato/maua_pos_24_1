import { StyleSheet, TextInput, View, Text, Pressable, FlatList, Alert } from 'react-native';
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

interface Lembrete{
  id?: string;
  texto: string;
}
export default function App() {
  const [lembrete, setLembrete] = useState<Lembrete>({texto: ''})
  const [lembretes, setLembretes] = useState<Lembrete[]>([])
  const [emModoDeEdicao, setEmModoDeEdicao] = useState(false)

  const adicionar = () => {
    const novoLembrete: Lembrete = {id: Date.now().toString(), texto: lembrete.texto}
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete({texto: ''})
  }
  const remover = (lembrete: Lembrete) => {
    console.log('chamou remover')
    Alert.alert(
      //titulo
      'Remover Lembrete',
      //memsagem central
      `Deseja remover este lembrete? ${lembrete.texto}`,
      //colecao de botões
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setLembretes(
              lembretesAtual => 
                lembretesAtual.filter(item => item.id !== lembrete.id)
            )
          }
        }
      ]
    )
  }
  const atualizar = () => {
    const lembretesAtualizados = lembretes.map(item => {
      if(item.id === lembrete.id){
        return lembrete
      }
      return item
    })
    //atualiza a lista de lembretes
    setLembretes(lembretesAtualizados)
    //sai do modo de edição
    setEmModoDeEdicao(false)
    //limpa o campo de lembrete
    setLembrete({texto: ''})
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Digite um lembrete...'
        value={lembrete.texto}
        onChangeText={(novoTexto) => setLembrete(
          {id: lembrete.id, texto: novoTexto}
        )}
      />
      <Pressable 
        style={styles.button}
        onPress={emModoDeEdicao? atualizar:adicionar}>
        <Text style={styles.buttonText}>
          {
            emModoDeEdicao? 'Atualizar Lembrete':'Salvar Lembrete'
          }
        </Text>
      </Pressable>
      <FlatList 
        style={styles.list}
        keyExtractor={(item) => item.id!}
        data={lembretes}
        renderItem={
          lembrete => (
            <View
              style={styles.listItem}>
              <Text style={styles.listItemText}>{lembrete.item.texto}</Text>
              <View
                style={styles.listItemButtons}>
                <Pressable onPress={() => remover(lembrete.item)} >
                  <AntDesign
                    name='delete'
                    size={24} />
                </Pressable>
                <Pressable onPress={() => {
                      setLembrete(
                        {id: lembrete.item.id, texto:lembrete.item.texto}
                      )
                      setEmModoDeEdicao(true)
                    }
                  }>
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
