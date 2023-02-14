import {TextInput, StyleSheet, View, Image, Pressable} from "react-native"
import eyeOpen from '../../assets/eye-open.png'
import eyeClose from '../../assets/eye-close.png'
import {useState} from "react"

export default function PasswordField(props) {
    const [secureInput, setSecureInput] = useState(true)

    return (
        <View style={inputStyles.passwordField}>
            <TextInput {...props} style={inputStyles.inputField} secureTextEntry={secureInput}/>
            <Pressable onPress={() => setSecureInput(prevState => !prevState)}>
                <Image source={secureInput ? eyeOpen : eyeClose} style={{width: 35, height: 35, marginHorizontal: 10}} />
            </Pressable>
        </View>
    )
}

const inputStyles = StyleSheet.create({
    inputField: {
        padding: 8,
        fontSize: 18,
        width: "82.5%",
    },
    passwordField: {
        borderWidth: 2,
        borderColor: "#F7941E",
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap"
    }
})