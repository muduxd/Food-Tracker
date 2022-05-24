import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    itemLeft: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },    

    itemRight: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        marginRight: 'auto'
    },

    square: {
        width: 24,
        height: 24,
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15,
    },

    itemName: {
        maxWidth: '60%',
        fontWeight: '500',
        fontSize: 17
    },

    itemCalories: {
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