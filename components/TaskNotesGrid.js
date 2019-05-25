import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, AppRegistry} from 'react-native';
import TaskNote from './TaskNote';

export default class TaskNotesGrid extends Component<Props> {
    state = {
        data: []
    };

    addHandler = (task, DateTime) => {
        let arr = {
            Task: task,
            DateTime: DateTime
        };
        this.setState({ data: [...this.state.data, arr] });

    };
    RemoveTaskHandler = (id) => {
        const data = this.state.data;
        data.splice(id, 1);
        this.setState({data});
    };

    render() {
        return (
            <ScrollView>
                <View>
                </View>
                <View style={styles.container}>
                    {
                        this.state.data.map((notes, index) =>

                            <TaskNote key={index} Id={index} RemoveTaskHandler={this.RemoveTaskHandler}
                                      Task={notes.Task} DateTime={String(notes.DateTime)}/>
                        )
                    }
                    </View>
            </ScrollView>
        );
    }
}
AppRegistry.registerComponent('TaskNotesGrid', () => TaskNotesGrid);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 25,
    },
});