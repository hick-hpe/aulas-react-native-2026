import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>Página Painel</Text>
            <Button title='Navegar para HOME' onPress={() => router.replace("/")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
