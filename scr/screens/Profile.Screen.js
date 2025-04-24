import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
                <View>
                    <Button
                    title="Go to Details"
                    onPress={() => navigartion.navigate('Home')}
                    />
                </View>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6fa', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#dda0dd', // Cor de fundo do container do botao
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
});