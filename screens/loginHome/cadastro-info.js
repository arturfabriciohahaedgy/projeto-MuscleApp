import 'react-native-gesture-handler';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export function cadastroInfo({ navigation }) {
    const [peso, onChangePeso] = React.useState(null);
    const [alutra, onChangeAlutra] = React.useState(null);
    const [idade, onChangeIdade] = React.useState(null);
    const [selectedValue, setSelectedValue] = useState("Iniciante")

    return (
        <View>
            {/* <LinearGradient colors={['rgba(92, 155, 249, 0.76)', 'white']}> */}
                <br></br>
                <Text style={styles.titulo2}>Primeiro, preencha com algumas informações:</Text>
                <br></br>
                <Text style={styles.tituloMenor}>Insira seu peso (Kilos):</Text>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePeso}
                            value={peso}
                            keyboardType='numeric'
                        />
                    </View>
                    <View>
                        <text style={{fontFamily:'arial', marginTop: '34px'}}>Kg</text>
                    </View>
                </View>
                <Text style={styles.tituloMenor}>Insira sua altura (Metros):</Text>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeAlutra}
                            value={alutra}
                            keyboardType='numeric'
                        />
                    </View>
                    <View>
                        <text style={{fontFamily:'arial', marginTop: '34px'}}>m</text>
                    </View>
                </View>
                <Text style={styles.tituloMenor}>Insira sua idade:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeIdade}
                    value={idade}
                    keyboardType='numeric'
                />
                <Text style={styles.tituloMenor}>Selecione o seu nível de experiencia com academia/ realização de exercicios:</Text>
                <br></br>
                <Picker
                selectedValue={null}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Iniciante" value="iniciante"/>
                    <Picker.Item label="Intermediario" value="intermediario"/>
                    <Picker.Item label="Veterano" value="veterano"/>
                </Picker>
                <br></br>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <TouchableOpacity style={styles.butao2} onPress={() => {navigation.goBack()}}>
                            <Text style={styles.butao2_text}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.butao} onPress={() => navigation.navigate("homedraw")}>
                            <Text style={styles.butao_text}>Enviar.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* </LinearGradient> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    titulo2: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 49,
        color: '#0500FF',
        textAlign: 'center',
    },

    tituloMenor: {
        //para as frases menores dentro da tela, como a "idade" em cima do text input da idade, ou o "alutra ou peso" em cima do text input dele
        //position: 'center',
        //width: "114px",
        height: "20px",
        left: "16px",
        top: "217px",
        fontFamily: 'verdana',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#003E92',
    },
    input: {
        width: 76,
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        display: 'flex',
    },
    dropdown: {
        height: 50,
        width: 150,
        margin: 12,
    },
    butao: {
        width: 98,
        height: 50,
        backgroundColor: '#00A1FC',
        //border: '1px solid #000000',
        borderColor: '#000000',
        borderRadius: 10,
        left: 161,
    },
    butao_text: {
        fontWeight: 'normal',
        fontSize: 20,
        //line-height: 25px;
        display: 'flex',
        //alignItems: 'center',
        //textAlign: 'center',
        alignSelf:"center",
        marginTop: 10,
    },
    butao2: {
        width: 98,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#000000',
        //border: '1px solid #000000',
    },
    butao2_text: {
        //textAlign: 'center',
        alignSelf: "center",
        fontWeight: 'bold' ,
        fontSize: 20,
        display: 'flex',
        //alignItems: 'center',
        color: '#137CDD',
        //alignContent: "center",
        marginTop: 10,
    },
})