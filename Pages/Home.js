import React, { useReducer } from 'react';
import HomeComponent from '../Components/Home/Home';
import { StateContext, DispatchContext } from '../Contexts/Home';
import Reducer, { initialState } from '../Reducer/Home';
function Home() {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <HomeComponent />
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}
export default Home;