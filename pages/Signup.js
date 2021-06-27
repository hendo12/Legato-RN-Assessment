import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Button from '../components/Button';
import background from '../assets/background.jpg';
import logo from '../assets/logo.webp';


export default Signup = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.image} imageStyle={{ opacity: 0.45 }}>
                <View style={styles.contentContainer}>
                    <Image source={logo} style={styles.logo} />
                    <View>
                        <Text style={styles.header}>Create</Text>
                        <Text style={styles.header}>Connect</Text>
                        <Text style={styles.header}>Collaborate</Text>
                    </View>
                    <Button text='Sign in / Join' />
                </View>
            </ImageBackground>
            {/* <StatusBar style="auto" /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        padding: 24,
        paddingBottom: 96,
        justifyContent: 'flex-end',
    },
    contentContainer: {
        height: '70%',
        justifyContent: 'space-between'
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center'
    },
    header: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        paddingVertical: 8,
        letterSpacing: 2
    },
});