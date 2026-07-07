import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tituloContainer: {
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 25,
        alignItems: "center",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },

    container: {
        paddingHorizontal: 20,
    },

    header: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 30,
    },

    grupoCampo: {
        marginBottom: 20,
    },

    erroContainer: {
        backgroundColor: "#FDECEC",
        borderWidth: 1,
        borderColor: "#F5C2C7",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 20,
    },

    erroTexto: {
        color: "#B42318",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
    },

    label: {
        fontSize: 16,
        marginBottom: 8,
        color: "#333",
        fontWeight: "500",
    },

    campo: {
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        paddingHorizontal: 12,
        backgroundColor: "#FFF",
    },

    placeholderTextColor: {
        color: "#969696"
    },

    botao: {
        backgroundColor: "#45D445",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    textoBotao: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    }
});