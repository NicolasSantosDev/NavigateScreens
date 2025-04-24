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
                    />
                </View>
            </View>
       </View>
    )
}