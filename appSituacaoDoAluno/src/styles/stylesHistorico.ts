import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        height: 100,
        padding: 14,
        borderRadius: 8,
        marginVertical: 6,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: "#EDEDED",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    infoCol: {
        flex: 1,
    },
    statusCol: {
        justifyContent: "center",
        alignItems: "flex-end",
    },
    textoNotas: {
        fontSize: 12,
        color: "#8E8E93",
        marginBottom: 4,
    },
    textoMedia: {
        fontSize: 14,
        color: "#3A3A3C",
    },
    valorMedia: {
        fontWeight: "bold",
        color: "#1C1C1E",
    },
    // Estilos base para as tags de status
    badgeBase: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
        fontSize: 11,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        overflow: "hidden",
    },
    badgeAprovado: {
        backgroundColor: "#E6F4EA",
        color: "#137333",
    },
    badgeRecuperacao: {
        backgroundColor: "#FEF7E0",
        color: "#B06000",
    },
    badgeReprovado: {
        backgroundColor: "#FCE8E6",
        color: "#C5221F",
    },
});