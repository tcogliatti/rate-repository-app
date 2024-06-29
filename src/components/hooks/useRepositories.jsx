// import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../graphql/queries";

const useRepositories = () => {
    const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
    const { repositories = null } = data

    // const [repositories, setRepositories] = useState(null)

    // const fetchRepositories = async () => {
    //     const response = await globalThis.fetch('http://localhost:5000/api/repositories') // 'global' porque es un metodo de un objeto global 😳
    //     const json = await response.json()
    //     setRepositories(json)
    // }

    // useEffect(() => {
    //     fetchRepositories() // se llama la primera vez cuando se monta el componente
    // }, [])

    const repositoriesNode = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

    return { loading, repositories: repositoriesNode, refetch }
}

export default useRepositories