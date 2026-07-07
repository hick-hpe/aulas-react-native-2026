import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RegistroForm } from "../types/registro";
import { styles } from "../styles/stylesHistorico";

interface ItemHistoricoProps {
    dados: RegistroForm;
}

class ItemHistorico extends Component<ItemHistoricoProps, {}> {
    render() {
        const { nota1, nota2, nota3, media, status } = this.props.dados;

        const estiloBadge = 
            status === "Aprovado" ? styles.badgeAprovado :
            status === "Recuperação" ? styles.badgeRecuperacao : 
            styles.badgeReprovado;

        return (
            <View style={styles.itemContainer}>
                <View style={styles.infoCol}>
                    <Text style={styles.textoNotas}>
                        Notas: {nota1} | {nota2} | {nota3}
                    </Text>
                    <Text style={styles.textoMedia}>
                        Média: <Text style={styles.valorMedia}>{media.toFixed(1)}</Text>
                    </Text>
                </View>

                <View style={styles.statusCol}>
                    <Text style={[styles.badgeBase, estiloBadge]}>{status}</Text>
                </View>
            </View>
        );
    }
}

export default ItemHistorico;
