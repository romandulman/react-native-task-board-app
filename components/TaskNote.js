import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, AppRegistry,} from 'react-native';
import {ImageBackground} from 'react-native'
import {Button} from 'react-native-material-ui';

export default class TaskNote extends Component<Props> {
    state = {
        Id: this.props.Id
    };

    handleRemove = () => {
        this.props.RemoveTaskHandler(this.state.Id)
    };

    render() {
        return (
            <View style={styles.container}>
                <Button accent text="Remove" onPress={this.handleRemove}/>
                <ImageBackground
                    source={require('./images/sticky-note1.png')}
                    style={{width: 159, height: 150, backgroundRepeat: 'no-repeat', backgroundSize: 'stretch'}}
                >
                    <Text>Task:{this.props.Task}</Text>
                    <Text>Time:{this.props.DateTime}</Text>
                </ImageBackground>
            </View>
        );
    }
}
AppRegistry.registerComponent('TaskNote', () => TaskNote);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        margin: 5,
    },
});
