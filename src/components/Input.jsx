import { StyleSheet, TextInput } from "react-native";

export function Input({ ...props }) {
    return (
        <TextInput
            {...props}
            placeholderTextColor={'#ABABAB'}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1A1A1A',
        padding: 20,
        borderRadius: 10,
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
    },
});
