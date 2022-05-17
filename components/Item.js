import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Item.styles'

export const Item = ({id, name, calories, complete, food, setFood}) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={[styles.square, { backgroundColor: complete ? '#FF0000' : '#55BCF6' }]}></View>
        <Text style={[styles.itemName, { textDecorationLine: complete ? 'line-through' : 'none' }]}>{name}</Text>
      </View>

      <View style={styles.itemRight}>
        <Text style={styles.itemCalories}>{calories}</Text>
        <TouchableOpacity style={styles.circular} onPress={() => setFood(food.filter(element => element.id !== id))}></TouchableOpacity>
      </View>
    </View>
  )
}