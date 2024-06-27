import React from "react";
import { Button, StyleSheet, View } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../components/StyledTextInput'
import { loginValidationSchema } from "../validationSchemas/login";
import StyledText from '../components/StyledText'

const initiaValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ... props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledTextInput 
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                { ... props }
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default function LoginPage() {
    return (
        <Formik 
        validationSchema={loginValidationSchema}
        initialValues={initiaValues}
        onSubmit={ values => console.log(values)} >
            {({handleSubmit}) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue 
                            name='email'
                            placeholder="e-mail"
                        />
                        <FormikInputValue 
                            name='password'
                            placeholder="password"
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='LogIn' />
                    </View>
                )
            }}
        </Formik>
    )
}