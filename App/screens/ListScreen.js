import { View, Text, StyleSheet, Image, FlatList, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import TodoItem from '../components/TodoItem'
import { dataList } from '../Atoms'
import { useAtom, useAtomValue } from 'jotai'

const ListScreen = () => {

  const data = useAtomValue(dataList)
  const [text, setText] = useState('')
  const [update, setUpdate] = useAtom(dataList)

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>TODO LIST</Text>
        <FlatList
            keyExtractor={(item)=>item.id}
            data={data}
            renderItem={({item})=>(
            <TodoItem item={item.todo}/>
            )}
            />
      <TextInput style={styles.input} onChangeText={setText} value={text}/>
      <TouchableOpacity onPress={()=>{
        setUpdate(prevUpdate => [...prevUpdate, {
            id: data.length+1+text,
            todo: text,
        }])
      }}>
        <View>
            <Image style={styles.button} source={require('../assets/plus.png')} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    titleText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '700',
        paddingBottom: 20,
    },
    button: {
        width: 48,
        height: 48,
    },
    container: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    input: {
        width: 300,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#555',
        marginBottom: 20,
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '500',
        paddingHorizontal: 20,
    }
})