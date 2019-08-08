import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Choices } from '../utils/Choices'

export default function button(props) {
    return <TouchableOpacity
        onPress={() => props.pressChoice(props.name)}
        style={styles.button}
    >
        <Text style={styles.buttonText}>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    }
})