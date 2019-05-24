import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,AppRegistry} from 'react-native';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

export default class AddNewTask extends Component<Props> {
    state = {
        show: true,
        Task: '',
        DateTime: ''
    };

    handleShow = () => {
        this.setState({ show: true });
    };
 handleCancel = () =>{
     this.setState({show: false})
 };

    render() {
        let { Task } = this.state;

        return (
            <View style={styles.container}>
                {this.state.show && <Dialog >
                    <Dialog.Title><Text>Add New Task</Text></Dialog.Title>
                    <Dialog.Content>
                        <TextField
                            label='Task text'
                            value={Task}
                            onChangeText={ (Task) => this.setState({ Task }) }
                        />

                    </Dialog.Content>
                    <Dialog.Actions>
                        <DialogDefaultActions
                            actions={['cancel', 'ok']}

                            options={{ ok: { disabled: false } }}
                            onActionPress={this.handleCancel}
                        />
                    </Dialog.Actions>
                </Dialog> }
            </View>
        );
    }
}
AppRegistry.registerComponent('AddNewTask', () => AddNote);

const styles = StyleSheet.create({
    container:  {
        marginTop : 30,
    },

});