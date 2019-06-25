import {useState, useCallback} from 'react';
function useInputValue(initialValue){
    const [value, setValue] = useState(initialValue);
    const onChangeText = useCallback((text) => {
        setValue(text);
    }, []);
    return {value, setValue, onChangeText};
}

export default useInputValue;