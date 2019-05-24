import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, AppRegistry} from 'react-native';
import {Dialog, DialogDefaultActions} from 'react-native-material-ui';
import {TextField} from 'react-native-material-textfield';
import {Button} from 'react-native-material-ui';

export default class AddNewTask extends Component<Props> {
    state = {
        show: true,
        Task: '',
        DateTime: ''
    };

    handleShow = () => {
        this.setState({show: true});
    };
    handleHide = () => {
        this.setState({show: false})
    };

    handleAdd = () => {
        this.props.addHandler(this.state.Task, this.state.DateTime)
        this.handleHide()
    };

    render() {
        let {Task} = this.state;

        return (
            <View style={styles.container}>
                {this.state.show && <Dialog>
                    <Dialog.Title><Text>Add New Task</Text></Dialog.Title>
                    <Dialog.Content>
                        <TextField
                            label='Task text'
                            value={Task}
                            onChangeText={(Task) => this.setState({Task})}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <View style={styles.btnContainer}>
                            <Button flat primary text="Add" onPress={this.handleAdd}/>
                            <Button flat accent text="Cancel" onPress={this.handleHide}/>
                        </View>
                    </Dialog.Actions>
                </Dialog>}
            </View>
        );
    }
}
AppRegistry.registerComponent('AddNewTask', () => AddNewTask);

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    btnContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
});