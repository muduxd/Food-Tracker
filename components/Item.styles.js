import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },    

    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    square: {
        width: 24,
        height: 24,
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15,
    },

    itemName: {
        maxWidth: '80%',
        fontWeight: '500',
        fontSize: 17
    },

    itemCalories: {
        maxWidth: '70%',
        marginHorizontal: 10,
        color: 'grey',
        fontWeight: '600'
    },


    circular: {
        width: 14,
        height: 14,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 1
    },
})