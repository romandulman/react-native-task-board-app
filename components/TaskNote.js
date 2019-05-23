import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, AppRegistry,} from 'react-native';
import { ImageBackground } from 'react-native'

export default class TaskNote extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./images/sticky-note1.png')}
                    style={{width: 159, height: 150, backgroundRepeat: 'no-repeat', backgroundSize: 'stretch'}}
                >
                    <Text>Task:{this.props.task}</Text>
                    <Text>Time:{this.props.time}</Text>
                    <Text>Date:{this.props.date}</Text>
                </ImageBackground>
            </View>
        );
    }
}
AppRegistry.registerComponent('TaskNote', () => taskNote);

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        backgroundColor: '#F5FCFF',
        margin: 5,
    },
});
