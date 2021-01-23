import { StyleSheet, Alert,View,Text, } from "react-native";
import React, { lazy } from "react"; 
const AlertItem = ({title,message,clik,show}) => {
  {
    show &&
  
  Alert.alert(
    title,
    message, 
    [
      {
        text: "Yes", onPress: () => {clik},
        
      },
      { text: "No", onPress: () => console.log("No action") }
    ],
    { cancelable: true }
  );
  }
  }
export default AlertItem;