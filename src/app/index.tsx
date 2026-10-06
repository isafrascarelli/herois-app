import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CustomModal from '../components/CustomModal';
import HeroCard from '../components/HeroCard';

interface Hero {
    id: number;
    name: string;
    className: string;
}

export default function Index() {

    const [modalVisible, setModalVisible] = useState(false);
    const [heroes, setHeroes] = useState<Hero[]>([]);

    function addHero(name: string, className: string) {

        const newHero: Hero = {
            id: Date.now(),
            name: name,
            className: className
        };

        setHeroes([...heroes, newHero]);

        setModalVisible(false);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Guilda de Heróis
            </Text>

            <Text style={styles.subtitle}>
                Seus heróis
            </Text>

            <View style={styles.list}>

                {heroes.length === 0 ? (

                    <Text style={styles.empty}>
                        Nenhum herói cadastrado.
                    </Text>

                ) : (

                    heroes.map((hero) => (
                        <HeroCard
                            key={hero.id}
                            name={hero.name}
                            className={hero.className}
                        />
                    ))

                )}

            </View>

            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>
                    Cadastrar Herói
                </Text>
            </Pressable>

            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={addHero}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#571010'
    },

    title: {
        color: '#FFD700',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    subtitle: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 4
    },

    list: {
        flex: 1,
        marginTop: 30
    },

    empty: {
        color: '#aaa',
        textAlign: 'center',
        marginTop: 50
    },

    button: {
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 10
    },

    buttonText: {
        color: '#151525',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }

});