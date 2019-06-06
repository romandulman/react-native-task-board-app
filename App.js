import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Maingrid from './components/TaskNotesGrid';
import AddTask from './components/AddNewTask'
import {Toolbar} from 'react-native-material-ui';

type Props = {};
export default class App extends Component<Props> {

    showAddTaskHandler = () =>{
      this.refs.addNew.handleShow();
    };

    addHandler = (Task,DateTime) =>{
        this.refs.addNewTask.addHandler(Task,DateTime)
    };

    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    onLeftElementPress={this.showAddTaskHandler}
                    addHandler={this.addHandler}
                    leftElement='add'
                    centerElement="My  Task Board"
                    rightElement={{
                        menu: { labels: ['Exit'] },
                    }}
                />
                  <AddTask addHandler={this.addHandler} ref="addNew" />

                <Maingrid ref="addNewTask" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
