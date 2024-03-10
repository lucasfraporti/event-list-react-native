import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 30
    },
  
    eventName: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 45
    },
  
    eventDate: {
      color: '#6b6b6b',
      fontSize: 15
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      gap: 5,
      marginTop: 35,
      marginBottom: 40
    },

    input: {
        flex: 1,
        height: 55,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fff',
        padding: 15,
        fontSize: 15
    },

    button: {
      width: 55,
      height: 55,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center'
    },

    buttonText: {
      color: '#fff',
      fontSize: 25,
    },

    emptyList: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
  });