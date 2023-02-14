import {TextInput, StyleSheet} from "react-native"

export default function Field(props) {
    return (
        <TextInput {...props} style={inputStyles.inputField}/>
    )
}

const inputStyles = StyleSheet.create({
    inputField: {
        borderWidth: 2,
        borderColor: "#F7941E",
        borderRadius: 5,
        padding: 8,
        fontSize: 18,
        marginVertical: 10
    }
})