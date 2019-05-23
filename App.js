import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import Maingrid from './components/TaskNotesGrid';
import AddTask from './components/AddNewTask'
import { Toolbar } from 'react-native-material-ui';
import { Button } from 'react-native-material-ui';

type Props = {};
export default class App extends Component<Props> {

    showAddGuestHandler = () =>{
      //  this.refs.addNew.handleShow();
        alert();
    };

    addHandler = (Name,Body) =>{
        this.refs.addNewTask.addOne(Name,Body)
    };

    render() {
        return (
            <View  style={styles.container}>
                <Toolbar
                    ref="addNew"
                    onLeftElementPress={this.showAddGuestHandler}
                    addHandler={this.addHandler}
                    leftElement='add'
                    centerElement="My Task Board"
                    rightElement={{
                        menu: { labels: ['Item 1', 'Item 2'] },
                    }}
                />
                <AddTask/>

                <Maingrid ref="addNewGuest" />
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


    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
