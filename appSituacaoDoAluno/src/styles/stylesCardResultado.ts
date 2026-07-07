import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: "#EAEAEA",
    },

    col: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    colStatus: {
        borderLeftWidth: 1,
        borderLeftColor: "#EAEAEA",
    },

    labelTitle: {
        fontSize: 12,
        color: "#8E8E93",
        fontWeight: "600",
        textTransform: "uppercase",
        marginBottom: 6,
        letterSpacing: 0.5,
    },

    valorNota: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#1C1C1E",
    },

    labelAprovado: {
        backgroundColor: "#E6F4EA",
        color: "#137333",
        paddingVertical: 6,
        paddingHorizontal: 12,
        textTransform: "uppercase",
        borderRadius: 6,
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
        overflow: "hidden", 
    },

    labelRecuperacao: {
        backgroundColor: "#FEF7E0",
        color: "#B06000",
        paddingVertical: 6,
        paddingHorizontal: 12,
        textTransform: "uppercase",
        borderRadius: 6,
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
        overflow: "hidden",
    },

    labelReprovado: {
        backgroundColor: "#FCE8E6",
        color: "#C5221F",
        paddingVertical: 6,
        paddingHorizontal: 12,
        textTransform: "uppercase",
        borderRadius: 6,
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
        overflow: "hidden",
    },
});
