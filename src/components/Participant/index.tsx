import { Alert, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

type ParticipantProps = {
  name: string
}

export function Participant({ name }: ParticipantProps) {
  function handleParticipantRemove(name: string) {
    Alert.alert('Confirmação de remoção', `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Remover',
        style: 'default',
        onPress: () => Alert.alert('Removido', `Participante ${name} removido com sucesso.`),
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

      <TouchableOpacity style={styles.button} onPress={() => handleParticipantRemove(name)}>
          <Text style={styles.buttonText}>
            -
          </Text>
      </TouchableOpacity>
    </View>
  )
}