import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, FlatList } from "react-native"
import { Screen, SuggestionItem, Text, Header } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"
import { Api } from "../../services/api"

const ROOT = {
  flex: 1,
  backgroundColor: color.palette.white
}
const HEADER = {
  paddingTop: "10%",
  shadowColor: 'grey',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: 2
}
const HEADER_TITLE = {
  fontSize: 20,
  color: color.palette.black,
  fontFamily: "Mulish",
}

export const SuggestionListScreen = observer(function SuggestionListScreen() {

  // Pull in navigation via hook
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const[isLoading,SetIsLoading] = useState(false)

  const renderItem = ({ item }) => {
    return (
      <SuggestionItem item={item} />
    );
  };

  return (
    <View style={ROOT}>
      <Header
        headerTx="SuggestionListScreen.howTo"
        style={HEADER}
        leftIcon="back"
        titleStyle={HEADER_TITLE}
        onLeftPress={goBack}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

  )
})
