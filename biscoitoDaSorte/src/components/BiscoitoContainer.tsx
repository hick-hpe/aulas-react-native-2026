import { Component, useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

interface BiscoitoProps {
    aberto: boolean
}

export class BiscoitoContainer extends Component<BiscoitoProps> {

    fraseAtual = '';

    obterFrase = (): string => {
        const listaFrases = [
            "Grandes oportunidades estão a caminho.",
            "Uma surpresa agradável vai alegrar seu dia.",
            "A persistência levará você ao sucesso.",
            "Confie na sua intuição.",
            "Boas notícias chegarão em breve.",
            "Um novo caminho se abrirá para você.",
            "A sorte favorece quem se arrisca.",
            "Você encontrará o que procura.",
            "Um gesto gentil fará toda a diferença.",
            "Seu esforço será recompensado."
        ];

        const index = (Math.floor(Math.random() * (listaFrases.length - 1)));
        return listaFrases[index];
    };

    render() {
        const { aberto } = this.props;

        const imgAberto = `../assets/biscoitoAberto.png`;
        const imgFechado = `../assets/biscoitoFechado.png`;
        
        if (aberto && this.fraseAtual === '') {
            this.fraseAtual = this.obterFrase();
        }

        if (!aberto && this.fraseAtual !== '') {
            this.fraseAtual = '';
        }

        return (
            <View>
                <Image
                    source={
                        this.props.aberto
                            ? require(imgAberto)
                            : require(imgFechado)
                    }
                    style={{ width: 300, height: 300 }}
                />
                <Text style={styles.frase}>{this.fraseAtual}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frase: {
        textAlign: 'center',
        fontSize: 16,
        color: '#374151',
        marginTop: 10,
        paddingHorizontal: 20,
        minHeight: 40
    }
});
