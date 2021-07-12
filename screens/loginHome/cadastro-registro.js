import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export function cadastroReg({ navigation }) {
    const [usuario, onChangeUsuario] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [senha, onChangeSenha] = React.useState(null);

    return(
        <View style={styles.container}>
            {/* <LinearGradient colors={['white', 'rgba(92, 155, 249, 0.76)']}> */}
                <br></br>
                <Text style={styles.titulo1}>Seja bem vindo!!</Text>
                <Text style={styles.titulo1}>Para começar</Text>
                <Text style={styles.titulo2}>Crie uma conta:</Text>
                <br></br>
                <Text style={styles.tituloMenor}>Crie um nome de usuario:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUsuario}
                    value={usuario}
                    placeholder="Insira qualquer nome"
                />
                <Text style={styles.tituloMenor}>Insira seu email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="email@endereço.com"
                />
                <Text style={styles.tituloMenor}>Crie uma senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSenha}
                    value={senha}
                    secureTextEntry={true}
                    placeholder="************"
                />
                <br></br>
                <TouchableOpacity  style={styles.butao} onPress={() => {navigation.navigate('Informações')}}>
                    <Text style={styles.butao_text}>Registrar a conta.</Text>
                </TouchableOpacity>
                <br></br>
                <Text style={styles.textoComum}>Já possui conta?</Text>
                <TouchableOpacity  style={styles.butao} onPress={() => {navigation.goBack()}}>
                    <View style={{flexDirection:"row", alignSelf:"center"}}>
                        <View>
                            <Text style={{fontSize: '24px',marginTop:'10px'}}>Faça</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold',fontSize:'24px',marginTop:'10px'}}> Login</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            <br></br>
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
    titulo1: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 49,
        textAlign: 'center',
        color: '#2F80ED',
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
        //para as frases menores dentro da tela, como a "senha" em cima do text input da senha, ou o "Email ou Usuario" em cima do text input dele
        //position: 'center',
        //width: "114px",
        height: 20,
        left: 16,
        top: 217,
        fontFamily: 'verdana',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#003E92',
    },
    textoComum: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
    },      
    input: {
        width: 293,
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        display: 'flex',
    },
    butao: {
        height: 58,
        width: 246.15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#000000',
        //border: '1px solid #000000',
        alignSelf: "center",
    },
    butao_text: {
        //textAlign: 'center',
        alignSelf: "center",
        //fontWeight: 'bold' ,
        fontSize: 20,
        display: 'flex',
        //alignItems: 'center',
        color: '#137CDD',
        //alignContent: "center",
        marginTop: 10,
    },
    butaoAlternativo_text: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: "center",
        marginTop: 10,
    },
})