import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Text } from './components';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions} size={4}>
                    To get started, edit App sdffasdfdas. fsadfasdsdf asdf asd
                </Text>
                <Text style={styles.instructions} size={4}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5
    }
});
