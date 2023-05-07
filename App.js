import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const[people,setPeople]=useState([
    {name:'sevval',id:'1'},
    {name:'bahar',id:'2'},
    {name:'sencer',id:'3'},
    {name:'miray',id:'4'},
    {name:'berke',id:'5'},
    {name:'mehlika',id:'6'},
  ]);
  const pressHandler=(id)=>{
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.id!=id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      />
      {/* <ScrollView>
        {people.map((item)=>{
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24
  }
});


