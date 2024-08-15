import { View, Text, StyleSheet } from "react-native";

export function MeuComponente() {
    return(
        <View>
            <Text>Meu novo componente</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myStyle: {
        color: 'green'
    }
})