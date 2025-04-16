// Calculator.jsx
import React, { useState } from 'react';

function Calculator() {
  const [value, setValue] = useState('');

  const handleClick = (val) => setValue(value + val);
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (e) {
      setValue('Hiba');
    }
  };
  const clear = () => setValue('');

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Számológép</h2>
      <input className="border p-2 mb-2 w-full" value={value} readOnly />
      <div className="grid grid-cols-4 gap-2">
        {[1,2,3,"+",4,5,6,"-",7,8,9,"*",0,".","/","="].map((val) => (
          <button
            key={val}
            onClick={() => (val === "=" ? calculate() : handleClick(val))}
            className="bg-gray-200 p-2 rounded hover:bg-gray-300"
          >
            {val}
          </button>
        ))}
        <button onClick={clear} className="col-span-4 bg-red-200 p-2 rounded hover:bg-red-300">
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
