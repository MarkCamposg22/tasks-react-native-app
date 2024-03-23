import { StyleSheet, Text } from "react-native";

export function Typography({ variant, children, ...props }) {
    return (
        <Text style={styles[`${variant}`]} {...props}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        maxWidth: '50%'
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    normal: {
        color: '#fff',
        fontSize: 20,
        maxWidth: '80%'
    }
})
