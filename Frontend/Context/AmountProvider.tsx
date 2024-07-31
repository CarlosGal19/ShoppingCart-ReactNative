import { createContext, useState } from "react";

const AmountContext = createContext<any>(null);

interface AmountProviderProps {
    children: React.ReactNode;
}

const AmountProvider = ({ children }: AmountProviderProps) => {
    const [amount, setAmount] = useState<number>(1);

    return (
        <AmountContext.Provider value={{ amount, setAmount }}>
            {children}
        </AmountContext.Provider>
    );
};

export { AmountProvider, AmountContext };
