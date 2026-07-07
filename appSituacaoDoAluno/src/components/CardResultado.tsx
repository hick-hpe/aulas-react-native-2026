import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/stylesCardResultado";
import { RegistroForm } from "../types/registro";

interface CardResultadoProps {
    dados: RegistroForm;
};

class CardResultado extends Component<CardResultadoProps, {}> {
    constructor(props: CardResultadoProps) {
        super(props);
    }

    render() {
        const { dados } = this.props;

        if (!dados) return <Text>Nenhum dado encontrado.</Text>;

        const { media, status } = dados;

        return (
            <View style={styles.cardContainer}>
                {/* Bloco da Média */}
                <View style={styles.col}>
                    <Text style={styles.labelTitle}>Média</Text>
                    <Text style={styles.valorNota}>{media.toFixed(2)}</Text>
                </View>

                {/* Bloco da Classificação */}
                <View style={[styles.col, styles.colStatus]}>
                    <Text style={styles.labelTitle}>Classificação</Text>
                    <Text style={
                        status == "Aprovado" ?
                            styles.labelAprovado :
                            status == "Recuperação" ?
                                styles.labelRecuperacao :
                                styles.labelReprovado
                    }>{status}</Text>
                </View>
            </View>
        );
    }
}

export default CardResultado;
