import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const NavBar = ({ title }) => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#8B008B',
        paddingBottom: 10
    },
    text: {
        color: '#E6E6FA',
        fontSize: 20
    }
})