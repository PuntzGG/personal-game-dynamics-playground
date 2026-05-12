import { useState } from "react";
import { ParameterSlider } from "./components/ParameterSlider";
import { AssumptionPanel } from "./components/AssumptionPanel";
import { checkAssumptions } from "./model/assumptions";
import type { ModelParams, StateFZ } from "./model/types";

export default function App(){
  const [d, setPunishmentFraction] = useState(0.3);
  const [r, setInterestRate] = useState(3);
  const [n, setGroupSize] = useState(5);
  const [sigma, setLonerPayoff] = useState(1);

  const modelParams: ModelParams = {
    punishmentFraction: d,
    interestRate: r,
    groupSize: n,
    lonerPayoff: sigma,
  };

  const [initialState, setInitialState] = useState<StateFZ>({
    f: 0.5,
    z: 0.25,
  });

  const assumptionStatus = checkAssumptions(modelParams);

  return(
    <div>
      {/*Here will be my sliders for the dynamic variables! -E.*/}
      <h1>Dynamics Playground</h1>
      
      <ParameterSlider
        label="Punishment fraction d"
        value={d}
        min={0}
        max={1}
        step={0.01}
        onChange={setPunishmentFraction}
      />

      <ParameterSlider
        label="Interest rate r"
        value={r}
        min={1}
        max={5}
        step={0.01}
        onChange={setInterestRate}
      />

      <ParameterSlider
        label="Group size n"
        value={n}
        min={2}
        max={10}
        step={1}
        onChange={setGroupSize}
        format={(value) => value.toFixed(0)}
      />

      <ParameterSlider
        label="Loner payoff σ"
        value={sigma}
        min={0}
        max={3}
        step={0.01}
        onChange={setLonerPayoff}
      />

      <h2>Initial condition</h2>
      <ParameterSlider
        label = "Initial f"
        value={initialState.f}
        min={0}
        max={1}
        step={0.01}
        onChange={(newF) =>
          setInitialState((currentState) => ({
            ...currentState,
            f: newF,
          }))
        } 
      />

      <ParameterSlider
        label = "Initial z"
        value={initialState.z}
        min={0}
        max={1}
        step={0.01}
        onChange={(newZ) =>
          setInitialState((currentState) => ({
            ...currentState,
            z: newZ,
          }))
        } 
      />

      {/*Debug view of current model parameters*/}
      <pre>
        {JSON.stringify(modelParams, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(initialState, null, 2)}
      </pre>
      <AssumptionPanel status={assumptionStatus} />
    </div>
  );
}