import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native"

export default function Layout({children, isScrollView = true}) {
    return (
        <SafeAreaView style={layoutStyle.main}>
            { isScrollView ? <ScrollView>{children}</ScrollView> : children }
        </SafeAreaView>
    )
}

const layoutStyle = StyleSheet.create({
    main: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})