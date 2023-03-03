import React from 'react';
import { useLocation } from 'react-router-dom';
import { CounterContext } from '../../context/createContext';

function Home() {
  const { state } = useLocation();
  return (
    <>
      <div>{state ? `welcome ${state.name}` : 'Login first'}</div>
      <CounterContext.Consumer>
        {(data) => (
          <div>
            <p>{data.counter}</p>
            <button
              type="button"
              onClick={() => data.setcounter((value) => value + 1)}
            >
              Increament Counter
            </button>
          </div>
        )}
      </CounterContext.Consumer>
    </>
  );
}

export default Home;
