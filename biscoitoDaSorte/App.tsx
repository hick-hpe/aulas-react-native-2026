// importações
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BiscoitoContainer } from './src/components/BiscoitoContainer';
import { Component } from 'react';

// definição do estado do componente
interface State {
  aberto: boolean
}

// definição do componente principal
export default class App extends Component<{}, State> {

  // definição do estado inicial
  state: State = {
    aberto: false
  };

  // função para alternar o estado do biscoito
  toggleBiscoito = () => {
    this.setState(prevState => ({ aberto: !prevState.aberto }));
  }

  // renderização do componente
  render() {
    return (
      <View style={styles.container}>
        {/* título do aplicativo */}
        <Text style={styles.title}>Teste sua sorte!!!</Text>

        {/* componente do biscoito */}
        <BiscoitoContainer aberto={this.state.aberto} />

        {/* botões de ação */}
        <View style={styles.containerButtons}>
          {/* botão para abrir/reiniciar o biscoito */}
          <TouchableOpacity onPress={this.toggleBiscoito} style={styles.button}>
            <Text style={styles.textButton}>
              {/* alternar texto do botão de acordo com o estado */}
              {this.state.aberto ? 'Reiniciar' : 'Abrir biscoito'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827'
  },

  containerButtons: {
    flexDirection: 'row',
    marginTop: 25
  },

  button: {
    backgroundColor: '#374151',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 3
  },

  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});