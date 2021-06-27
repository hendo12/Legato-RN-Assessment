import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const Button = ({ text }) => {
    return (
        <Pressable accessibilityLabel="Sign in or Sign Up" style={styles.button} >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        color: 'white',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
});

export default Button;