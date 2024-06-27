import React from "react";
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import theme from "../theme";
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation() 
    const active = (pathname == to)

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback} >
            <StyledText style={textStyles} fontWeight='bold'>
                {children}
            </StyledText>
        </Link>

    )
}


const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        padding: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 7,
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    }

})

export default AppBar