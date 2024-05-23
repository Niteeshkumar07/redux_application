// import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// First, create a Redux slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
  },
});

// Extract the actions and reducer
const { incremented, decremented } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Configure the store
const store = configureStore({
  reducer: counterReducer,
});

// Create a Counter component
const Counter = () => {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
};

// Wrap your app with the Provider
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
