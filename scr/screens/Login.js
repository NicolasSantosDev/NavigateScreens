import React from 'react';
import { TextInput, View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, secureTextEntry, } from 'react-native';



export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça Seu Login🔐</Text>
            <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor={"white"} ></TextInput>
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"white"} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.login}><Text style={styles.Textlogin}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('Home')}><Text style={styles.Textlogin}>Voltar</Text></TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#025159', 
    },
    input: {
        padding: 16,
        width: 300,
        height: 55,
        marginTop: 30,
        margin: 15,
        borderWidth: 2,
        borderRadius: 20,
        color: '#fff',
        borderColor: "#fff",
    },
    login: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        color: "#000",
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",

    },
    voltar: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",

    },
    title: {
        alignSelf: 'center',
        fontSize: 35,
        margin: 50,
        color: "#fff",
        fontWeight: "bold"
    },
});