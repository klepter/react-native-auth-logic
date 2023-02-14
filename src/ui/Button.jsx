import {Pressable, Text, StyleSheet} from "react-native"

export default function Button({title, onPress}) {
    return (
        <Pressable style={bttnStyles.enterBttn} onPress={onPress}>
            <Text style={{color: "#fff"}}>{title}</Text>
        </Pressable>
    )
}

const bttnStyles = StyleSheet.create({
    enterBttn: {
        backgroundColor: "#F7941E",
        width: "50%",
        marginHorizontal: "25%",
        marginVertical: "2%",
        alignItems: "center",
        borderRadius: 5,
        paddingVertical: 8
    }
})