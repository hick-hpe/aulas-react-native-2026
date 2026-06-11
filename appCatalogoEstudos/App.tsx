import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import ItemCatalogo from './src/components/ItemCatalogo/ItemCatalogo';

type Categoria =
  | 'Disciplinas'
  | 'Livros'
  | 'Tarefas'
  | 'Conteúdos';

type ItemCatalogo = {
  id: string;
  nome: string;
  descricao: string;
};


export default function App() {
  const [abaSelecionada, setAbaSelecionada] = useState<string>('Disciplinas');

  const abas = ['Disciplinas', 'Livros', 'Tarefas', 'Conteúdos'];

  const dados: Record<Categoria, ItemCatalogo[]> = {
  Disciplinas: [
    {
      id: '1',
      nome: 'Matemática',
      descricao: 'Álgebra, geometria e cálculo',
    },
    {
      id: '2',
      nome: 'Português',
      descricao: 'Gramática e literatura',
    },
    {
      id: '3',
      nome: 'História',
      descricao: 'História do Brasil e Geral',
    },
    {
      id: '4',
      nome: 'Geografia',
      descricao: 'Mapas, clima e população',
    },
    {
      id: '5',
      nome: 'Biologia',
      descricao: 'Seres vivos e ecossistemas',
    },
  ],

  Livros: [
    {
      id: '1',
      nome: 'Clean Code',
      descricao: 'Boas práticas de programação',
    },
    {
      id: '2',
      nome: 'Algoritmos',
      descricao: 'Estruturas de dados e lógica',
    },
    {
      id: '3',
      nome: 'O Pequeno Príncipe',
      descricao: 'Clássico da literatura mundial',
    },
    {
      id: '4',
      nome: 'Dom Casmurro',
      descricao: 'Romance de Machado de Assis',
    },
    {
      id: '5',
      nome: '1984',
      descricao: 'Distopia de George Orwell',
    },
  ],

  Tarefas: [
  {
    id: '1',
    nome: 'Exercícios de Matemática',
    descricao: 'Capítulo 5',
  },
  {
    id: '2',
    nome: 'Resumo de História',
    descricao: 'Revolução Francesa',
  },
  {
    id: '3',
    nome: 'Leitura de Biologia',
    descricao: 'Sistema respiratório',
  },
  {
    id: '4',
    nome: 'Pesquisa de Geografia',
    descricao: 'Mudanças climáticas',
  },
  {
    id: '5',
    nome: 'Redação',
    descricao: 'Tema: Tecnologia e educação',
  },
  {
    id: '6',
    nome: 'Lista de Física',
    descricao: 'Leis de Newton',
  },
  {
    id: '7',
    nome: 'Exercícios de Química',
    descricao: 'Balanceamento de equações',
  },
  {
    id: '8',
    nome: 'Leitura de Literatura',
    descricao: 'Capítulos 1 a 3',
  },
  {
    id: '9',
    nome: 'Mapa Mental',
    descricao: 'Brasil Império',
  },
  {
    id: '10',
    nome: 'Atividade de Inglês',
    descricao: 'Simple Present',
  },
  {
    id: '11',
    nome: 'Pesquisa de Ciências',
    descricao: 'Sistema Solar',
  },
  {
    id: '12',
    nome: 'Exercícios de Geometria',
    descricao: 'Área e perímetro',
  },
  {
    id: '13',
    nome: 'Trabalho em Grupo',
    descricao: 'Sustentabilidade',
  },
  {
    id: '14',
    nome: 'Revisão para Prova',
    descricao: 'Conteúdo do bimestre',
  },
  {
    id: '15',
    nome: 'Prática de Programação',
    descricao: 'Funções em JavaScript',
  },
],

  Conteúdos: [
    {
      id: '1',
      nome: 'React Native',
      descricao: 'Componentes e estados',
    },
    {
      id: '2',
      nome: 'TypeScript',
      descricao: 'Tipagem estática',
    },
    {
      id: '3',
      nome: 'JavaScript',
      descricao: 'Funções e objetos',
    },
    {
      id: '4',
      nome: 'HTML',
      descricao: 'Estrutura de páginas web',
    },
    {
      id: '5',
      nome: 'CSS',
      descricao: 'Estilização de interfaces',
    },
  ],
};
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Catálogo de Estudos</Text>

      <View style={styles.menu}>
        {abas.map((aba) => (
          <TouchableOpacity
            key={aba}
            style={[
              styles.aba,
              abaSelecionada === aba && styles.abaAtiva,
            ]}
            onPress={() => setAbaSelecionada(aba)}
          >
            <Text
              style={[
                styles.textoAba,
                abaSelecionada === aba && styles.textoAbaAtiva,
              ]}
            >
              {aba}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.categoria}>
        {abaSelecionada}
      </Text>

      {abaSelecionada === 'Tarefas' ? (
  <ScrollView contentContainerStyle={styles.lista}>
    {dados.Tarefas.map((item) => (
      <ItemCatalogo
        key={item.id}
        nome={item.nome}
        descricao={item.descricao}
      />
    ))}
  </ScrollView>
) : (
  <FlatList
    data={dados[abaSelecionada as Categoria]}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.lista}
    renderItem={({ item }) => (
      <ItemCatalogo
        nome={item.nome}
        descricao={item.descricao}
      />
    )}
  />
)}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },

  aba: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },

  abaAtiva: {
    backgroundColor: '#007AFF',
  },

  textoAba: {
    color: '#333',
    fontWeight: '600',
  },

  textoAbaAtiva: {
    color: '#fff',
  },

  categoria: {
    marginTop: 25,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },

  lista: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});