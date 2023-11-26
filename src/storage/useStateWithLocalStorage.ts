import { useEffect, useState } from "react";

export function useStateWithLocalStorage<T>(defaultValue: T, key: string) {
    const useStateVal = useState<T>(() => {
        // Use stored value, otherwise use default value
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }

        return defaultValue;
    });

    const [state, setState] = useStateVal;
    useEffect(() => {
       // whenever we update state, we write to local storage
       const val = JSON.stringify(state);
       localStorage.setItem(key, val);
    }, [key, state])

    return useStateVal;
}