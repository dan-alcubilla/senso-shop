import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const ListHeader = () => {
    return (
        <View style={[styles.headerContainer]}>
            <View style={styles.headerTop}></View>
            <View style={styles.heroContainer}></View>
            <View style={styles.categoriesContainer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        gap: 20,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    avatarText: {
        fontSize: 16,
    },
    cartContainer: {
        padding: 10,
    },
    signOutButton: {
        padding: 10,
    },
    heroContainer: {
        width: '100%',
        height: 200,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    categoriesContainer: {},
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    category: {
        width: 100,
        alignItems: 'center',
        marginBottom: 16,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    categoryText: {},
    badgeContainer: {
        position: 'absolute',
        top: -5,
        right: 10,
        backgroundColor: '#1BC464',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});