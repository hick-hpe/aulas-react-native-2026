import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaForm from './src/components/TelaForm';
import TelaResultado from './src/components/TelaResultado';
import { DadosForm } from './src/types/DadosForm';

interface AppState {
  dados: DadosForm | null;
  telaAtual: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dados: null,
      telaAtual: 'principal'
    };

    this.mandarParaTelaResultado = this.mandarParaTelaResultado.bind(this);
    this.voltarParaTelaForm = this.voltarParaTelaForm.bind(this);
  }

  mandarParaTelaResultado(dados: DadosForm) {
    console.log('Dados recebidos na tela de resultado:', dados);
    
    this.setState({
      dados: dados,
      telaAtual: 'resultado'
    });
  }

  voltarParaTelaForm() {
    this.setState({
      telaAtual: 'principal'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.telaAtual === 'principal' ? (
            <TelaForm mandarParaTelaResultado={this.mandarParaTelaResultado} />
          ) : (
            <TelaResultado dados={this.state.dados} voltarParaTelaForm={this.voltarParaTelaForm} />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;