import { useState } from 'react';

import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    StyleSheet,
    Alert
} from 'react-native';

interface Props {
    visible: boolean;
    onClose: () => void;
    onSave: (name: string, className: string) => void;
}

export default function CustomModal({
    visible,
    onClose,
    onSave
}: Props) {

    const [name, setName] = useState('');
    const [className, setClassName] = useState('');

    function saveHero() {

        if (name === '' || className === '') {
            Alert.alert(
                'Atenção',
                'Preencha todos os campos.'
            );

            return;
        }

        onSave(name, className);

        setName('');
        setClassName('');
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >

            <View style={styles.background}>

                <View style={styles.modal}>

                    <Image
                        source={require('../../assets/avatar.jpg')}
                        style={styles.image}
                    />

                    <Text style={styles.title}>
                        Novo Herói
                    </Text>

                    <Text style={styles.label}>
                        Nome
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do herói"
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.label}>
                        Classe
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Classe do herói"
                        value={className}
                        onChangeText={setClassName}
                    />

                    <Pressable
                        style={styles.save}
                        onPress={saveHero}
                    >
                        <Text style={styles.saveText}>
                            Salvar
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={onClose}
                    >
                        <Text style={styles.cancel}>
                            Cancelar
                        </Text>
                    </Pressable>

                </View>

            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        backgroundColor: '#571010',
        width: '85%',
        padding: 24,
        borderRadius: 20
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center'
    },

    title: {
        color: '#FFD700',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15
    },

    label: {
        color: '#fff',
        marginBottom: 5
    },

    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 15
    },

    save: {
        backgroundColor: '#FFD700',
        padding: 13,
        borderRadius: 8
    },

    saveText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },

    cancel: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 15
    }

});