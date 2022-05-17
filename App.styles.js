import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      backgroundColor: '#E8EAED',
    },
  
    header: {
      textAlign: 'left',
      marginVertical: 50,
      marginRight: 'auto',
      marginLeft: 20
    },

    scrollView: {
      width: '100%',
    },

    title: {
      fontSize: 30,
      fontWeight: '700',
    },

    calories: {
      fontSize: 20,
      fontWeight: '500',
      padding: 5
    },
    
    itemWrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '85%'
    },
  
    formInput: {
      marginTop: 'auto',
      marginBottom: 10,
      padding: 5,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
  
    textInput: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: 'white',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: '50%',
      height: 40
    }, 
  
    numberInput: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: 'white',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: '30%',
      height: 40
    },
  
    button: {
      width: 40,
      height: 40,
      display: 'flex',
      backgroundColor: 'black',
      opacity: 0.7,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
    },

    buttonText: {
      fontSize: 22,
      color: 'white',
    }
})