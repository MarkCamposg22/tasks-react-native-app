import { useState, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Task } from '../components/Task';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const database = 'tasks-projects';

export function TasksView() {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('');

    useEffect(() => {
        handleGetTasks();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem(database, JSON.stringify(tasks));
    }, [tasks])

    const handleGetTasks = async () => {
        const tasksDatabase = await AsyncStorage.getItem(database);
        setTasks(JSON.parse(tasksDatabase));
    }

    const handleCheck = async (index) => {
        const newTask = tasks.map((task, indexTask) => {
            if (index === indexTask) {
                task.finished = !task.finished;
            }
            return task;
        });
        setTasks(newTask);
    }

    const handleRemove = async (index) => {
        const newTasks = tasks.filter((_, indexTask) => index !== indexTask);
        setTasks(newTasks);
    }

    const handleCreate = async () => {
        if (title === '') {
            Alert.alert('Insira um título para tarefa!');
            return;
        }

        const newTasks = [...tasks, {
            title,
            finished: false
        }];

        setTasks(newTasks);
        setTitle('')
    }

    return (
        <View style={styles.container}>
            <Typography variant={'title'}>Crie e organize as suas tarefas</Typography>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatlist}
                keyExtractor={(_, index) => index}
                data={tasks}
                renderItem={({ item, index }) => (
                    <Task
                        {...item}
                        handleCheck={() => handleCheck(index)}
                        handleRemove={() => handleRemove(index)}
                    />
                )}
            />
            <View style={styles.form}>
                <Input placeholder="Insira o nome da tarefa" value={title} onChangeText={(text) => setTitle(text)} />
                <Button onPress={handleCreate} title={'Adicionar'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    flatlist: {
        width: '90%',
        marginTop: 20,
    },
    form: {
        width: '100%',
        padding: 10
    },
});
