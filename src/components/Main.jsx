import React from "react";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import LoginPage from "../pages/login";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<LoginPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </View>
    )
}

export default Main;