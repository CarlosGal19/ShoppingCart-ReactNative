import { useState, FC } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import useAmount from '../Hooks/useAmount'

const NumberInput: FC<{ max: number }> = ({ max }) => {

    const [number, setNumber] = useState<number>(1);
    const { setAmount } = useAmount();

    const handleChange = (text: string) => {
        if (/^\d*$/.test(text)) {
            const num = Number(text);
            if (num <= max) {
                setNumber(num);
                setAmount(num);
                return
            }
            setNumber(max);
            setAmount(max);
        }
    };

    const handleBlur = () => {
        if (number === 0) {
            setNumber(1);
            return;
        }
    }

    const increment = () => {
        setNumber((prev) => {
            if (prev < max) {
                return prev + 1;
            }
            return prev;
        });
        setAmount((prev) => {
            if (prev < max) {
                return prev + 1;
            }
            return prev;
        });
    };

    const decrement = () => {
        setNumber((prev) => (prev > 1 ? prev - 1 : 1));
        setAmount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <View style={styles.container}>
            <Button title="-" onPress={decrement} />
            <TextInput
                style={styles.input}
                value={number.toString()}
                keyboardType="numeric"
                onChangeText={handleChange}
                onBlur={() => handleBlur()}
            />
            <Button title="+" onPress={increment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: 100,
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
    },
});

export default NumberInput;
