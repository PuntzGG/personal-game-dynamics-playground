type ParameterSliderProps = {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    format?: (value: number) => string;
    onChange: (newValue: number) => void;
};

export function ParameterSlider(props: ParameterSliderProps) {
    return (
        <label style={{display: "block", marginBottom: "12px"}}>
            {props.label}: {props.format ? props.format(props.value) : props.value.toFixed(2)}
            <input
                type="range"
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                onChange={(event) => props.onChange(Number(event.target.value))}
            />
        </label>
    );
}