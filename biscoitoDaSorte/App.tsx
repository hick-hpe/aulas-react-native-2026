import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BiscoitoContainer } from './src/components/BiscoitoContainer';
import { Component } from 'react';

export default class App extends Component {
  state = {
    estaAberto: false
  };

  setEstado = () => {
    this.setState({ estaAberto: !this.state.estaAberto });
  }

  reiniciar = () => {
    this.setState({ estaAberto: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Teste sua sorte!!!</Text>

        <BiscoitoContainer aberto={this.state.estaAberto} />

        <View style={styles.containerButtons}>
          {
            !this.state.estaAberto
              ? (
                <TouchableOpacity onPress={this.setEstado} style={styles.button}>
                  <Text style={styles.textButton}>Abrir biscoito</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.reiniciar} style={styles.button}>
                  <Text style={styles.textButton}>Reiniciar</Text>
                </TouchableOpacity>
              )
          }
        </View>
      </View>
    );
  }
}

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