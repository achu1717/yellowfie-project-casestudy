import React from "react";
import { View, StyleSheet, Button, } from "react-native";
import AlertItem from "./Alertcomp";
    

const App = () => {

 const handle=()=>{
   console.log("your product is successfully deleted");
 }


  return (
    <View style={styles.container}>
      <Button title="CLEAR" 
       onPress={() => {
         AlertItem({title:"CART",message:"Are you sure want to delete this item", clik:handle(),show:true
         })
        
       }}    
            
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;