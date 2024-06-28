import React from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from './RepositoryItem'
import useRepositories from './hooks/useRepositories'

const RepositoryList = () => { // trae los repositorios del backend y los almacena en un estado
    const { repositories } = useRepositories()
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
}

export default RepositoryList