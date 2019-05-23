import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,AppRegistry} from 'react-native';
export default class AddNote extends Component<Props> {
    state = {
        show: false,
        Name: '',
        Body: ''
    };

    handleShow = () => {
        this.setState({ show: true });
    };


    render() {
        return (
            <View >

            </View>
        );
    }
}
AppRegistry.registerComponent('AddNote', () => AddNote);