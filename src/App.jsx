import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import { TasksView } from './views/TasksView';

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <TasksView />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        paddingTop: Platform.OS === 'android' ? 45 : 0,
    },
});

export default registerRootComponent(App);
