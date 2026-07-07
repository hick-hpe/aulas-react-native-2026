import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesForm";

interface TelaResultadoProps {
    dados: {
        alcool: string;
        gasolina: string;
    } | null;
    voltarParaTelaForm: () => void;
}

class TelaResultado extends Component<TelaResultadoProps, {}> {
    render() {
        const { dados } = this.props;

        if (!dados) {
            return (
                <Text>Sem dados para exibir.</Text>
            );
        }

        return (
            <View>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>
                        Resultado
                    </Text>
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Preço do Álcool:
                    </Text>
                    <Text style={styles.valor}>
                        R$ {dados.alcool}
                    </Text>
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Preço da Gasolina:
                    </Text>
                    <Text style={styles.valor}>
                        R$ {dados.gasolina}
                    </Text>
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Recomendação:
                    </Text>
                    <Text style={[
                        styles.resultadoMensagem,
                        dados.mensagem === "Abasteça com Álcool" ? styles.resultadoAlcool : styles.resultadoGasolina
                    ]}>
                        {dados.mensagem}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.botao}
                    activeOpacity={0.8}
                    onPress={this.props.voltarParaTelaForm}
                >
                    <Text style={styles.textoBotao}>
                        Voltar para o formulário
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TelaResultado;