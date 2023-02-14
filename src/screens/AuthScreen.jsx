import {useContext, useState} from "react"  
import {AuthContext} from "../context/AuthContext"  
import {useHttp} from "../hooks/http.hook"  
import {View, Image, StyleSheet, Dimensions, Text} from "react-native"  
import {BACKEND_URI} from "../../config"  
import Layout from "../Layout"  
import logo from '../../assets/icon.png'  
import footer from '../../assets/footer.png'  
import Field from "../ui/Field"  
import PasswordField from "../ui/PasswordField"  
import Button from "../ui/Button"  
import Loader from "../ui/Loader"

export default function AuthScreen() {
    const auth = useContext(AuthContext)

    const {loading, request, error, clearError} = useHttp()
    const [validationError, setValidationError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async () => {
        setValidationError('')
        try {
            if (email !== '' && password !== '') {
                const data = await request(`${BACKEND_URI}/api/login`, "POST", {email, password})
                auth.login(data.accessToken, data.refreshToken, data.user)
            } else {
                setValidationError('Введите логин и пароль')
            }
        } catch (e) {
            throw e
        }
    }
    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <Layout isScrollView={false}>
            <View style={authStyles.header}>
                <Image source={logo} style={authStyles.headerImage}/>
            </View>
            <View style={authStyles.form}>
                <Text style={authStyles.formHeaderText}>Вход</Text>
                <View>
                    <Text>Email</Text>
                    <Field value={email} onChangeText={setEmail}/>
                </View>
                <View>
                    <Text>Пароль</Text>
                    <PasswordField value={password} onChangeText={setPassword} autoCapitalize="none"
                                   autoCorrect={false}/>
                </View>
                {(error && validationError === '') && <Text style={authStyles.error}>{error}</Text>}
                {validationError && <Text style={authStyles.error}>{validationError}</Text>}
                <Button title="Вход" onPress={loginHandler}/>
            </View>
            <View style={authStyles.footer}>
                <Image source={footer} style={authStyles.footerImage}/>
            </View>
        </Layout>
    )
}

const authStyles = StyleSheet.create({
    headerImage: {
        width: 100,
        height: 100,
        marginHorizontal: Dimensions.get("window").width / 2 - 50,
        marginVertical: 25
    },
    footer: {
        position: "absolute",
        top: Dimensions.get("window").height - 185
    },
    footerImage: {
        width: Dimensions.get("window").width,
        height: 185
    },
    form: {
        width: "75%",
        marginHorizontal: "12.5%",
        marginVertical: 25,
    },
    formHeaderText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    error: {
        textAlign: "center",
        marginVertical: 10
    }
})