import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageCookie } from './src/components/ImageCookie';
import { Component } from 'react';

interface Props {
  setEstado: (estado: boolean) => void;
}

export default class App extends Component {
  state = {
    estado: false
  };

  setEstado = () => {
    this.setState({ estado: !this.state.estado });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Teste sua sorte!!!</Text>

        <ImageCookie aberto={this.state.estado} />

        <TouchableOpacity onPress={this.setEstado}>
          <Text>Abrir biscoito</Text>
        </TouchableOpacity>
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
