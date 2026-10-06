import { View, Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
    className: string;
}

export default function HeroCard({ name, className }: Props) {

    return (
        <View style={styles.card}>

            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.className}>
                Classe: {className}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#340707',
        padding: 16,
        borderRadius: 12,
        marginBottom: 10
    },

    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    className: {
        color: '#aaa',
        marginTop: 4
    }
});