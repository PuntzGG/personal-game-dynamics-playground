import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [countColor, setCountColor] = useState("#ffffff");

  const addAmount = (amount: number) => {
    console.log("Adding:", amount);
    setCount((latestValue) => latestValue + amount);
  };

  const subtractAmount = (amount: number) => {
    console.log("Subtracting:", amount);
    setCount((latestValue) => latestValue - amount);
  };

  const double = (value: number) => {
    return value * 2;
  };

  const clampSeconds = (value: number) => {
    return Math.min(20, Math.max(1, value));
  };

  const milliseconds = seconds * 1000;

  return (
    <div>
      <h1 style={{color: countColor}}>{count}</h1>
      <label>
        Time slider:
        <input
          style={{ marginLeft: "10px", marginBottom: "20px", marginTop:"10px"}}
          type="range"
          min={1}
          max={20}
          step={1}
          value={seconds}
          onChange={(event)=> setSeconds(Number(event.target.value))}
        />
        <input 
          type="color"
          value={countColor}
          onChange={(event) => setCountColor(event.target.value)}
        />
      </label>
      
      <p>Timer duration: {milliseconds} ms.</p>
      <div style={{marginBottom: "16px", display: "flex", justifyContent: "center", gap: "8px"}}>
        
        <ControlButton
          label={`Count for ${seconds} seconds`}
          onClick={() => {
            const timer = setInterval(() => {
              setCount((latestValue) => latestValue + 1);
            }, 1000);
            
            setTimeout(() => {
              clearInterval(timer);
            }, milliseconds);
          }}
        />

        <ControlButton 
          label="Increase seconds" 
          onClick={() => setSeconds((latestSeconds) => clampSeconds(latestSeconds + 1))}
        />
        <ControlButton 
          label="Decrease seconds" 
          onClick={() => setSeconds((latestSeconds) => clampSeconds(latestSeconds - 1))}
        />

      </div>
      <div 
        style={{
          display:"flex", 
          justifyContent:"center", 
          alignItems: "flex-start",
          gap: "40px", 
          marginTop: "5px", 
          marginBottom: "10px"
        }}
      >
        <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
          <strong>Adds</strong>
          <ControlButton label="Add 1" onClick={() => addAmount(1)}/>
          <ControlButton label="Add 5" onClick={() => addAmount(5)}/>
          <ControlButton label="Add 10" onClick={() => addAmount(10)}/>
          <ControlButton label="Add 100" onClick={() => addAmount(100)}/>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
          <strong>Other</strong>

          <ControlButton label="Double" onClick={() => setCount(double(count))}/>
          <ControlButton label="Add some amounts" onClick={() => {
            addAmount(1);
            addAmount(1);
            addAmount(1);
            addAmount(1);
            }}/>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
          <strong>Subtracts</strong>
          <ControlButton label="Subtract 1" onClick={() => subtractAmount(1)}/>
          <ControlButton label="Subtract 5" onClick={() => subtractAmount(5)}/>
          <ControlButton label="Subtract 10" onClick={() => subtractAmount(10)}/>
          <ControlButton label="Subtract 100" onClick={() => subtractAmount(100)}/>
        </div>
      </div>
    </div>
  );
}

function ControlButton({ label, onClick }: {label:string; onClick: () => void}){
  return <button onClick={onClick}>{label}</button>;
}