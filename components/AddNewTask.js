import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,AppRegistry} from 'react-native';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';

export default class AddNewTask extends Component<Props> {
    state = {
        show: true,
        Name: '',
        Body: ''
    };

    handleShow = () => {
        this.setState({ show: true });
    };
 handleCancel = () =>{
     this.setState({show: false})
 }

    render() {
        return (
            <View style={styles.container}>
                {this.state.show && <Dialog >
                    <Dialog.Title><Text>Hello world</Text></Dialog.Title>
                    <Dialog.Content>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <DialogDefaultActions
                            actions={['cancel', 'ok']}
                            /**
                            * this will disable the button for "ok"
                            */
                            options={{ ok: { disabled: true } }}
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