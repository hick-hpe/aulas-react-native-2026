import { Link, router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {

    const handleNavigation = () => {
        router.replace("/dashboard");
    }

    return (
        <View style={styles.container}>
            <Text>Página HOME</Text>
            <Link href="/profile">Ir para tela Profile</Link>
            <Link href="/user/123">Ir para tela Usuario</Link>
            <Button title='Navegar para o painel' onPress={handleNavigation} />
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
