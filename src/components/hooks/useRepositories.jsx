import { useEffect, useState } from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await globalThis.fetch('http://localhost:5000/api/repositories') // 'global' porque es un metodo de un objeto global 😳
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories() // se llama la primera vez cuando se monta el componente
    }, [])


    const repositoriesNode = repositories
        ? repositories.edges.map(edge => edge.node)
        : []

        return { repositories: repositoriesNode }
}

export default useRepositories