// importações
import { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

// definição das props do componente
interface BiscoitoProps {
    aberto: boolean
}

// definição do estado do componente
interface State {
    fraseAtual: string
}

// definição do componente do biscoito
export class BiscoitoContainer extends Component<BiscoitoProps, State> {

    // definição do estado inicial no construtor
    constructor(props: BiscoitoProps) {
        super(props);
        this.state = {
            fraseAtual: ''
        };
    }

    // função para obter uma frase aleatória
    obterFraseAleatoria = (): string => {
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

        const index = (Math.floor(Math.random() * listaFrases.length));
        return listaFrases[index];
    };

    // função para atualizar a frase atual com uma nova frase aleatória
    atribuirFrase = () => {
        this.setState({ fraseAtual: this.obterFraseAleatoria() });
    }

    // função para limpar a frase atual
    limparFrase = () => {
        this.setState({ fraseAtual: '' });
    };

    render() {
        // obter o estado do biscoito (aberto ou fechado)
        const { aberto } = this.props;

        // definir os caminhos das imagens do biscoito aberto e fechado
        const imgAberto = `../assets/biscoitoAberto.png`;
        const imgFechado = `../assets/biscoitoFechado.png`;

        // atualizar a frase atual com uma nova frase aleatória quando o biscoito for aberto
        if (aberto && this.state.fraseAtual === '') {
            this.atribuirFrase();
        }

        // limpar a frase atual quando o biscoito for fechado
        if (!aberto && this.state.fraseAtual !== '') {
            this.limparFrase();
        }

        return (
            <View>
                <Image
                    source={
                        // exibir a imagem do biscoito aberto ou fechado com base no estado do biscoito
                        this.props.aberto
                            ? require(imgAberto)
                            : require(imgFechado)
                    }
                    style={{ width: 300, height: 300 }}
                />
                {/* exibir a frase atual */}
                <Text style={styles.frase}>{this.state.fraseAtual}</Text>
            </View>
        );
    }
}

// estilos do componente
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
