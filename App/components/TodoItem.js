import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useAtom } from 'jotai'

import { dataList } from '../Atoms'

const TodoItem = ({item}) => {

  const [data, setData] = useAtom(dataList)

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableWithoutFeedback onPress={()=>{
        setData(data.filter(items => items.todo !== item))
        }}>
        <Image style={styles.crossIcon} source={require('../assets/cross.png')} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
   itemText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
   },
   itemContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    padding:10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
   },
   crossIcon: {
    width: 30,
    height: 30,
   }
})