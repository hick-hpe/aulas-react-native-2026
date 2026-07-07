import { Component } from 'react';
import { View } from 'react-native';
import { styles } from './src/styles/styles';
import FormNotas from './src/components/FormNotas';
import CardResultado from './src/components/CardResultado';
import CardHistorico from './src/components/CardHistorico';
import { RegistroForm } from './src/types/registro';

interface AppState {
  dados: RegistroForm | null;
  historico: Array<RegistroForm>;
}
export default class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      dados: null,
      historico: [
        // teste para a listagem
        // {nota1: 1, nota2: 1, nota3: 1, media: 1, status: "Aprovado"},
        // {nota1: 1, nota2: 1, nota3: 1, media: 1, status: "Aprovado"},
        // {nota1: 1, nota2: 1, nota3: 1, media: 1, status: "Aprovado"},
        // {nota1: 1, nota2: 1, nota3: 1, media: 1, status: "Aprovado"},
        // {nota1: 1, nota2: 1, nota3: 1, media: 1, status: "Aprovado"},
      ]
    };

    this.mandarParaCardResultado = this.mandarParaCardResultado.bind(this);
  }

  mandarParaCardResultado(dados: RegistroForm) {
    this.setState({ dados });
  }

  lidarComNovosDados = (novosDados: RegistroForm) => {
    this.setState((estadoAnterior) => ({
      dados: novosDados,
      historico: [novosDados, ...estadoAnterior.historico]
    }));
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <FormNotas mandarParaCardResultado={this.lidarComNovosDados} />
            {
              this.state.dados && (
                <View style={{ marginTop: 30 }}>
                  <CardResultado dados={this.state.dados} />
                </View>
              )
            }
          </View>

          <View style={styles.col}>
            <CardHistorico historico={this.state.historico} />
          </View>
        </View>
      </View>
    );
  }
}
