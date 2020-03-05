import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7519c1',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Te amo meu bebê!</Text>
        </View>
    );
}
