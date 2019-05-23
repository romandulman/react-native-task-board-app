import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,AppRegistry} from 'react-native';
import TaskNote from './TaskNote';

export default class TaskNotesGrid extends Component<Props> {
    state ={

    };


    addOne = (Name, Body) => {
        const data = this.state.data;
        let arr = {
            Name: Name,
            Body: Body
        };
        data.push(arr);
        this.setState({data});
        //  console.log(data);
    };

    render() {
        return (
            <ScrollView >

                <TaskNote task='ddd' date='19/02/1989' time='19:00'/>
                <TaskNote task='ddd' date='19/02/1989' time='19:00'/>
                <TaskNote task='ddd' date='19/02/1989' time='19:00'/>
                <TaskNote task='ddd' date='19/02/1989' time='19:00'/>
                <TaskNote task='ddd' date='19/02/1989' time='19:00'/>


            </ScrollView>
        );
    }
}
AppRegistry.registerComponent('TaskNotesGrid', () => TaskNotesGrid);

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

});