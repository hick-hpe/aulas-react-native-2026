import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemCatalogoProps {
  nome: string;
  descricao: string;
}

export default class ItemCatalogo extends Component<ItemCatalogoProps> {
  render() {
    const { nome, descricao } = this.props;

    return (
      <View style={styles.card}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
  },
});