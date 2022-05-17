import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { Item } from './components/Item'
import { styles } from './App.styles'


export default function App() {
  const [food, setFood] = useState([])
  const [textInput, setTextInput] = useState('')
  const [numberInput, setNumberInput] = useState('')


  const storeData = async (data, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (e) {}
  }



  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key)
      if (data === null && key === 'state') storeData([], 'state')
      if (data === null && key === 'date') storeData('', 'date')


      return data !== null ? JSON.parse(data) : key === 'state' ? [] : ''
    } catch(e) {}
  }




  const handleAddFood = () => {
    if (textInput !== '' && numberInput !== '') {
      setFood([...food, {id: food.length + 1, name: textInput, calories: numberInput, complete: false}])
      setTextInput('')
      setNumberInput('')
    }
  }


  const completeFood = (index) => {
    const array = [...food]
    array[index] = {...array[index], complete: !array[index].complete}
    setFood(array)
  }
  

  const resetCompleteFood = (state) => {
    const array = [...state]
    array.map(element => element.complete = false)
    setFood(array)
  }


  const datesAreOnSameDay = (first, second) => 
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()



  useEffect(() => {
    getData('state').then(state => {
      setFood(state)

      getData('date').then(date => {
        const lastDate = new Date(date)
        const now = new Date()

        if(!datesAreOnSameDay(lastDate, now)) resetCompleteFood(state)

        storeData(new Date().toString(), 'date')
      })
    })  
  }, [])


  useEffect(() => {
    storeData(food, 'state')
  }, [food])


  return (
    <View style={styles.app}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={styles.header}>
            <Text style={styles.title}>Today's Food</Text>
            <Text style={styles.calories}>Total Calories: {food.length > 0 ? food.reduce((a, b) => ({calories: +a.calories + +b.calories})).calories : 0}</Text>
          </View>


          <View style={styles.itemWrapper}>
            {
              food.map((element, index) => 
                <TouchableOpacity key={index} onPress={() => completeFood(index)}>
                  <Item {...element} food={food} setFood={setFood} storeData={storeData} />
                </TouchableOpacity>
              )
            }
          </View>
        </ScrollView>



      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.formInput}
      >
        <TextInput placeholder='Add Food' style={styles.textInput} value={textInput} onChangeText={text => setTextInput(text)} keyboardType='default' />
        <TextInput placeholder='Calories' style={styles.numberInput} value={numberInput} onChangeText={number => setNumberInput(number)} keyboardType='numeric' />

        <TouchableOpacity onPress={() => handleAddFood()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  )
}