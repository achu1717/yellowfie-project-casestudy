import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { useNavigation } from "@react-navigation/native"


const CONTAINER = {
  flex: 1,
  marginHorizontal: "4%",
  marginVertical: "2%"
}

const TEXT = {
  fontFamily: "Mulish",
  fontSize: 14,
  color: color.palette.black,
}
const TEXT1 = {
  fontFamily: "Mulish-Regular",
  fontSize: 14,
  color: "grey",
}


export const SuggestionItem = observer(function SuggestionItem(props) {

  const navigation = useNavigation()

  const redirect = (user) => {
    console.log("user", user)
    if (user.type === 'USER') navigation.navigate(
      'userProfile', { user: user }
    );
    if (user.type === 'STORE') navigation.navigate('userProfile',
      { user: user })
  }

  useEffect(() => {
      console.log("props",props)
  }, [])

  return (
    <View style={CONTAINER}>
      <View style={styles.itemHolder}>
        <TouchableOpacity 
          onPress={() => redirect(props.item)}
          
        >
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            
          <Image
            source={{
              uri: props.item.image ? props.item.image:props.item.imageUrl
            }}
            style={styles.imageHolder}
          />
          <View style={styles.textHolder}>
            <Text style={TEXT}>{props.item.displayName ?props.item.displayName: props.item.name}</Text>
            <Text style={TEXT1}>{props.item.displayName ?props.item.displayName:props.item.name}</Text>
          </View>
          </View>

        </TouchableOpacity>
            
      </View>
    </View>
  )
})
const styles = StyleSheet.create({
  itemHolder: {
    display: "flex",
    flexDirection: "row"
  },
  textHolder: {
    paddingHorizontal: "3%", paddingVertical: "2%"
  },
  imageHolder: {
    width: 60, height: 60, borderRadius: 60 / 2
  }

})
