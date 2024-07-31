import { View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CartProvider } from "../Context/CartProvider";
import { AmountProvider } from "../Context/AmountProvider";

export default function App() {

    const insets = useSafeAreaInsets();

    return (
        <>
            <CartProvider>
                <AmountProvider>
                    <SafeAreaProvider >
                        <StatusBar />
                        <View
                            style={{
                                flex: 1,
                                paddingBottom: insets.bottom,
                                paddingLeft: insets.left,
                                paddingRight: insets.right,
                                paddingTop: insets.top,
                            }}>
                            < Stack
                                screenOptions={{
                                    headerStyle: {
                                        backgroundColor: 'black'
                                    },
                                    headerTintColor: 'white',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerTitle: 'Shopping Cart',
                                }}
                            />
                        </View>
                    </SafeAreaProvider >
                </AmountProvider>
            </CartProvider>
        </>
    );
}
