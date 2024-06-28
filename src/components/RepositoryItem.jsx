import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = (props) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2}}>
            <View style={{ paddingEnd: 10, marginTop: 18 }}>
                <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
            </View>
            { /* Flex 1 hace que ocupe todo el ancho y haga salto de linea si lo necesita */}
            <View style={{ flex: 1}}> 
                <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
                <StyledText >{props.description}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
        </View>
    )
}

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <View style={{ marginTop: 4 }}>
                <RepositoryStats {...props} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: 'orange',
            ios: theme.colors.primary,
            default: 'purple'

        }),
        // backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start', // hace que el elemento ocupe el ancho del contenido y lo alinea start o end
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden' // para que tome el border radius
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    },
})

export default RepositoryItem
