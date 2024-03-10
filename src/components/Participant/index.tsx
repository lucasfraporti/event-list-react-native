import { Alert, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import { ParticipantsProps } from '../../screens/Home'

type ParticipantProps = {
  id: number
  name: string
  setParticipants: React.Dispatch<React.SetStateAction<ParticipantsProps[]>>
}

export function Participant({ id, name, setParticipants }: ParticipantProps) {
  function handleParticipantRemove({ id, name }: ParticipantsProps) {
    Alert.alert('Confirmação de remoção', `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Remover',
        style: 'default',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant.id !== id))
          Alert.alert('Removido', `Participante ${name} removido com sucesso.`)
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleParticipantRemove({ id, name })}>
          <Text style={styles.buttonText}>
            -
          </Text>
      </TouchableOpacity>
    </View>
  )
}