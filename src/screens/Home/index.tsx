import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles'

import { useState } from 'react';

export type ParticipantsProps = {
  id: number
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<ParticipantsProps[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    const participantsNames = participants.map(participant => participant.name)
    if (participantsNames.includes(participantName)) {
      return Alert.alert('Participante já cadastrado', `O participante ${participantName} já está cadastrado.`)
    }

    setParticipants(prevState => [...prevState, { id: participants.length + 1, name: participantName }])
    setParticipantName('')
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
          onChangeText={setParticipantName}
          value={participantName}
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
        renderItem={({ item }) => <Participant key={item.id} id={item.id} name={item.name} setParticipants={setParticipants} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Ninguém chegou no evento ainda?</Text>
        )}
      />
    </View>
  );
}