import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,AppRegistry} from 'react-native';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';

export default class AddNewTask extends Component<Props> {
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
            <View style={styles.container}>
                <Dialog >
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
                            onActionPress={() => {}}
                        />
                    </Dialog.Actions>
                </Dialog>
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