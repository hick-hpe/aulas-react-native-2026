import { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { RegistroForm } from "../types/registro";
import ItemHistorico from "./ItemHistorico";

interface HistoricoProps {
    historico: Array<RegistroForm>;
};

class CardHistorico extends Component<HistoricoProps, {}> {

    constructor(props: HistoricoProps) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.historico}
                    renderItem={
                        ({ item }) => <ItemHistorico dados={item} />
                    }
                    keyExtractor={(item, index) => `${index}`}
                    ListEmptyComponent={
                        <Text style={{ textAlign: 'center', color: '#999', marginTop: 20 }}>
                            Nenhum registro encontrado.
                        </Text>
                    }

                />
            </View>
        )
    }
}

export default CardHistorico;