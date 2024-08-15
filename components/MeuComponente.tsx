import { View, Text, StyleSheet } from "react-native";

interface Props {
    text: String

}

export function MeuComponente({text}: Props) {
    return(
        <View>
            <Text style={styles.myStyle}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myStyle: {
        color: 'white'
    }
})