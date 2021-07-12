import React, { useContext } from 'react';
import { Button, View, Text,SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function Imc({ navigation }) {

    // const values = useContext(values)
    // const imc = values.values[0];
    // const setImc = values.values[1];

    
    const calcular = () =>{
        var numero = peso/(altura**2);
        numero = Math.round(numero * 100) / 100;
        setResultado(numero);
    }
    
    const [altura, onAltura] = React.useState(null);
    const [peso, onPeso] = React.useState(null);
    const [resultado, setResultado] = React.useState(null);
    return (
        <View>
        <View style={styles.content}>
            <Text style={styles.text} textAlign={'center'} >Altura</Text>
            <TextInput
                style={styles.input}
                onChangeText={onAltura}
                value={altura}
                keyboardType='numeric'

                
            />
        </View>
        
        <View style={styles.content}>
            <Text style={styles.text} textAlign={'center'} >Peso</Text>
            <TextInput
                style={styles.input}
                onChangeText={onPeso}
                value={peso}
                keyboardType="numeric"
            />
            </View>

            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.text2}>calcular</Text>
            </TouchableOpacity>
            <Text style={styles.imc}>seu IMC:</Text>
            <Text style={styles.imc}>{resultado}</Text>
        </View>
    );
}
      
const styles = StyleSheet.create({
    button:{
        
    alignSelf:'center',
    flexDirection: 'row',
    padding: 15,
    marginVertical:30,
    marginHorizontal:150,
    backgroundColor: '#5c9bf9',
    borderWidth: 1,
    borderRadius: 10,
    },
    content: {
        marginTop:20,
    },
    text2:{
        fontSize:20,
        alignSelf:'center',
    },
    text: {
        
        alignSelf:'center',
    },
    input: {
        paddingLeft:10,
        margin:10,
        height: 50,
        width:80,
        alignSelf:'center',
        borderWidth: 1,
        borderRadius:20,
        fontSize:20,
    },
    imc: {
        fontSize:20,
        alignSelf:'center',
        marginTop:20,
        
    }
});

    
