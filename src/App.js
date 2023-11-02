// import React, { useReducer, createContext } from 'react'
import "./App.css";
// import ComponentA from "./components/ReducerContext/ComponentA";
// import ComponentB from "./components/ReducerContext/ComponentB";
// import ComponentC from "./components/ReducerContext/ComponentC";
import UserDetails from './components/reduxComp/UserDetails';
// import UserList from "./components/HOC/UserList";
// import SearchUsers from "./components/HOC/UserList";
// import SearchToDoList from "./components/HOC/ToDoList";
// import ComponentC from "./components/context/ComponentC";
// import ComponentA from "./components/context/ComponentA";
// import ReducerA from "./components/reducer/ReducerA";
// import ReducerB from "./components/reducer/ReducerB";
// import ReducerC from "./components/reducer/ReducerC";
// import Cleanup from "./components/useEffect/Cleanup";
// import ConditionalRender from "./components/useEffect/ConditionalRender";
// import Counter from "./components/useEffect/Counter";
// import CounterStateArray from "./components/useState/CounterStateArray";
// import CounterUseState from "./components/useState/CounterUseState";
// import CounterUseStateObject from "./components/useState/CounterUseStateObject";

// export const NameContext = createContext();
// export const SurnameContext = createContext();
// export const HobbiesContext = createContext();
// export const LiveContext = createContext();
// export const CountContext = createContext();

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'reset':
//       return initialState;
//     case 'decrement':
//       return state - 1;
//     case 'increment5+':
//       return state + 5;
//     default:
//       return state
//   }
// }


function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="App">
        {/* <CounterUseState/>
     <CounterUseStateObject/>
     <CounterStateArray/>
     <Counter/> */}
        {/* <ConditionalRender/> */}
        {/* <Cleanup/> */}

        {/* <NameContext.Provider value={'Jiiya'}>
        <SurnameContext.Provider value={'Amor'}>
          <HobbiesContext.Provider value={['Shopping', ' ', 'Travelling', ' ', 'Music']}>
            <LiveContext.Provider value={'Mumbai'}>
            <ComponentA />
            </LiveContext.Provider>
          </HobbiesContext.Provider>
        </SurnameContext.Provider>
      </NameContext.Provider> */}

        {/* <ReducerA/>
      <ReducerB/>
      <ReducerC/> */}

        {/* <div>
        <h2>Higher Order Component</h2>
        <div className="section">
          <div>
           <SearchUsers/>
          </div>
          <div>
            <SearchToDoList />
          </div>
        </div>
      </div> */}
        {/* <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
          <div>
            <h2>ReducerContextCount-  {count}</h2>
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </div>
        </CountContext.Provider> */}
<UserDetails/>
      </div>
    </>
  );
}

export default App;
