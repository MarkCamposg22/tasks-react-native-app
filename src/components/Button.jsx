import { StyleSheet, TouchableOpacity } from "react-native";

import { Typography } from "./Typography";

export function Button({ title, ...props }) {
    return (
        <TouchableOpacity style={styles.button} {...props}>
            <Typography variant={'button'}>{title}</Typography>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BB86FC',
        padding: 16,
        borderRadius: 10,
    },
});
