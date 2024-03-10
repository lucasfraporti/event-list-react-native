import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },

  name: {
    flex: 1,
    fontSize: 15,
    color: '#fff',
    padding: 15
  },

  button: {
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
})