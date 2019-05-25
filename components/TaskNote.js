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
                    style={{width: 169, height: 160, backgroundRepeat: 'no-repeat', backgroundSize: 'stretch'}}
                >
                    <Text style={styles.titlesText}>Task:</Text>
                    <ScrollView>
                        <Text style={styles.TaskText}>{this.props.Task}</Text>
                    </ScrollView>
                    <Text style={styles.titlesText}>Date & Time:</Text>
                    <Text style={styles.DateTimeText}>{this.props.DateTime}</Text>
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
        padding: 5,
        height: 200,
        width: 170
    },

    titlesText:{
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 5
    },

    TaskText:{
        fontSize: 12,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        margin: 5,
    },
    DateTimeText:{
        fontSize: 13,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        margin: 5,
        maxWidth: 120
    }
});
