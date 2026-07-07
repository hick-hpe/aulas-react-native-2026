import { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesForm";
import { RegistroForm } from "../types/registro";

interface FormProps {
    mandarParaCardResultado: (dados: RegistroForm) => void
}

interface FormState {
    inputNota1: string;
    inputNota2: string;
    inputNota3: string;
    erro: string;
};

class FormNotas extends Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super(props);

        this.state = {
            inputNota1: "",
            inputNota2: "",
            inputNota3: "",
            erro: ""
        };

        this.onChangeTextInputNota1 = this.onChangeTextInputNota1.bind(this);
        this.onChangeTextInputNota2 = this.onChangeTextInputNota2.bind(this);
        this.onChangeTextInputNota3 = this.onChangeTextInputNota3.bind(this);
        this.calcular = this.calcular.bind(this);
    }

    onChangeTextInputNota1(text: string) {
        this.setState({
            inputNota1: text
        });
    }

    onChangeTextInputNota2(text: string) {
        this.setState({
            inputNota2: text
        });
    }

    onChangeTextInputNota3(text: string) {
        this.setState({
            inputNota3: text
        });
    }

    calcular() {
        const { inputNota1, inputNota2, inputNota3 } = this.state;

        if (!inputNota1 && !inputNota2 && !inputNota3) {
            this.setState({
                erro: "Informe as notas!"
            });
            return;
        }

        if (!inputNota1) {
            this.setState({
                erro: "Informe a nota 1!"
            });
            return;
        }

        if (!inputNota2) {
            this.setState({
                erro: "Informe a nota 2!"
            });
            return;
        }

        if (!inputNota3) {
            this.setState({
                erro: "Informe a nota 3!"
            });
            return;
        }

        const nota1ValorLimpo = inputNota1.replace(',', '.');
        const nota2ValorLimpo = inputNota2.replace(',', '.');
        const nota3ValorLimpo = inputNota3.replace(',', '.');

        const regex = /^[0-9]+([.,][0-9]{1,2})?$/;
        if (!regex.test(nota1ValorLimpo) || !regex.test(nota2ValorLimpo) || !regex.test(nota3ValorLimpo)) {
            this.setState({
                erro: "Informe valores válidos!"
            });
            return;
        }

        const nota1 = parseFloat(nota1ValorLimpo);
        const nota2 = parseFloat(nota2ValorLimpo);
        const nota3 = parseFloat(nota3ValorLimpo);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            this.setState({
                erro: "Informe valores válidos!"
            });
            return;
        }

        const nota1NoIntervaloDesejado = nota1 >= 0 && nota1 <= 10;
        const nota2NoIntervaloDesejado = nota2 >= 0 && nota2 <= 10;
        const nota3NoIntervaloDesejado = nota3 >= 0 && nota3 <= 10;

        if (!nota1NoIntervaloDesejado || !nota2NoIntervaloDesejado || !nota3NoIntervaloDesejado) {
            this.setState({
                erro: "As notas devem ser maiores que zero e menores que dez!"
            });
            return;
        }

        this.setState({
            inputNota1: "",
            inputNota2: "",
            inputNota3: "",
            erro: ""
        });
        
        const media = (nota1 + nota2 + nota3) / 3;
        const status: "Aprovado" | "Recuperação" | "Reprovado" = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";
        const dados = { nota1, nota2, nota3, media, status };
        this.props.mandarParaCardResultado(dados);
    }

    render() {
        return (
            <View>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>
                        Situação do Aluno
                    </Text>
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Informe a nota 1:
                    </Text>

                    <TextInput
                        style={styles.campo}
                        placeholder="Nota 1"
                        placeholderTextColor={styles.placeholderTextColor.color}
                        keyboardType="numeric"
                        onChangeText={this.onChangeTextInputNota1}
                        value={this.state.inputNota1}
                    />
                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Informe a nota 2:
                    </Text>
                    <TextInput
                        style={styles.campo}
                        placeholder="Nota 2"
                        placeholderTextColor={styles.placeholderTextColor.color}
                        keyboardType="numeric"
                        onChangeText={this.onChangeTextInputNota2}
                        value={this.state.inputNota2}
                    />

                </View>

                <View style={styles.grupoCampo}>
                    <Text style={styles.label}>
                        Informe a nota3:
                    </Text>
                    <TextInput
                        style={styles.campo}
                        placeholder="Nota 3"
                        placeholderTextColor={styles.placeholderTextColor.color}
                        keyboardType="numeric"
                        onChangeText={this.onChangeTextInputNota3}
                        value={this.state.inputNota3}
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
                        Calcular média
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FormNotas;