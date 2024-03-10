import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles'

export function Home() {
  const participants = [
    { id: 1, name: 'Lucas' },
    { id: 2, name: 'João' },
    { id: 3, name: 'Roberto' },
    { id: 4, name: 'Aristóteles' },
    { id: 5, name: 'Ana' },
    { id: 6, name: 'Rogério' },
    { id: 7, name: 'Fernando' },
    { id: 8, name: 'Osvaldo' },
    { id: 9, name: 'Leonardo' },
    { id: 10, name: 'Ícaro' },
    { id: 11, name: 'Rodrigo' },
  ]

  function handleParticipantAdd() {
    const participantsNames = participants.map(participant => participant.name)
    if (participantsNames.includes('Rodrigo')) {
      Alert.alert('Participante já cadastrado', 'O participante Rodrigo já está cadastrado.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {/* A ScrollView carrega todos os itens, independentemente se eles aparecem ou não na tela */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => (
          <Participant key={participant.id} name={participant.name} />
        ))}
      </ScrollView> */}

      {/* A FlatList carrega somente os itens que estão aparecendo em tela */}
      <FlatList
        data={participants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Participant key={item.id} name={item.name} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Ninguém chegou no evento ainda?</Text>
        )}
      />
    </View>
  );
}