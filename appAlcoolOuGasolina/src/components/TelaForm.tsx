import { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { DadosForm } from "../types/DadosForm";
import { styles } from "../styles/stylesForm";

interface FormProps {
    mandarParaTelaResultado: (dados: DadosForm) => void
}

interface FormState {
    inputAlcool: string;
    inputGasolina: string;
    erro: string;
};

class TelaForm extends Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            inputAlcool: "",
            inputGasolina: "",
            erro: ""
        };

        this.onChangeTextInputAlcool = this.onChangeTextInputAlcool.bind(this);
        this.onChangeTextInputGasolina = this.onChangeTextInputGasolina.bind(this);
        this.calcular = this.calcular.bind(this);
    }

    onChangeTextInputAlcool(text: string) {
        this.setState({
            inputAlcool: text
        });
    }

    onChangeTextInputGasolina(text: string) {
        this.setState({
            inputGasolina: text
        });
    }

    calcular() {
        const { inputAlcool, inputGasolina } = this.state;

        if (!inputAlcool && !inputGasolina) {
            this.setState({
                erro: "Informe os valores!"
            });
            return;
        }

        if (!inputAlcool) {
            this.setState({
                erro: "Informe o valor do Álcool!"
            });
            return;
        }

        if (!inputGasolina) {
            this.setState({
                erro: "Informe o valor da Gasolina!"
            });
            return;
        }

        const alcoolValorLimpo = inputAlcool.replace(',', '.');
        const gasolinaValorLimpo = inputGasolina.replace(',', '.');

        const regex = /^[0-9]+([.,][0-9]{1,2})?$/;
        if (!regex.test(alcoolValorLimpo) || !regex.test(gasolinaValorLimpo)) {
            this.setState({
                erro: "Informe valores válidos!"
            });
            return;
        }

        const alcoolValorNumerico = parseFloat(alcoolValorLimpo);
        const gasolinaValorNumerico = parseFloat(gasolinaValorLimpo);

        if (isNaN(alcoolValorNumerico) || isNaN(gasolinaValorNumerico)) {
            this.setState({
                erro: "Informe valores válidos!"
            });
            return;
        }

        const mensagem = alcoolValorNumerico / gasolinaValorNumerico < 0.7 ? "Abasteça com Álcool" : "Abasteça com Gasolina";

        this.setState({
            inputAlcool: "",
            inputGasolina: "",
            erro: ""
        });

        const dados: DadosForm = {
            alcool: alcoolValorNumerico.toFixed(2).replace('.', ','),
            gasolina: gasolinaValorNumerico.toFixed(2).replace('.', ','),
            mensagem: mensagem
        };

        this.props.mandarParaTelaResultado(dados);
    }

    render() {
        return (
            <View>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>
                        Qual melhor opção?
                    </Text>
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Preço do Álcool:
                    </Text>

                    <TextInput
                        style={styles.campo}
                        placeholder="Preço do Álcool"
                        placeholderTextColor={styles.placeholderTextColor.color}
                        keyboardType="numeric"
                        onChangeText={this.onChangeTextInputAlcool}
                        value={this.state.alcool}
                    />
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Preço da Gasolina:
                    </Text>
                    <TextInput
                        style={styles.campo}
                        placeholder="Preço da Gasolina"
                        placeholderTextColor={styles.placeholderTextColor.color}
                        keyboardType="numeric"
                        onChangeText={this.onChangeTextInputGasolina}
                        value={this.state.gasolina}
                    />
                </View>

                {this.state.erro !== "" && (
                    <View style={styles.erroContainer}>
                        <Text style={styles.erroTexto}>
                            {this.state.erro}
                        </Text>
                    </View>
                )}

                <TouchableOpacity
                    style={styles.botao}
                    activeOpacity={0.8}
                    onPress={this.calcular}
                >
                    <Text style={styles.textoBotao}>
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default TelaForm;