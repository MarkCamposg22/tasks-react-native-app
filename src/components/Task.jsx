import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Checkbox from 'expo-checkbox';

import { Typography } from "./Typography";

export function Task(props) {
    return (
        <View style={styles.container}>
            <Checkbox
                onValueChange={props.handleCheck}
                color={props.finished ? '#BB86FC' : '#fff'}
                value={props.finished}
                style={{ width: 22, height: 22 }}
            />
            <Typography variant={'normal'} numberOfLines={1}>
                {props.title}
            </Typography>
            <TouchableOpacity onPress={props.handleRemove}>
                <Text>❌</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
})
