import type { AssumptionStatus } from "../model/assumptions";

type AssumptionPanelProps = {
    status: AssumptionStatus;
};

export function AssumptionPanel({ status }: AssumptionPanelProps) {
    return (
        <section>
            <p style={{ color: status.satisfiesInterestAssumption ? "green" : "red"}}>
                Assumption 1:{" "}
                {status.satisfiesInterestAssumption ? "satisfied" : "violated"}
            </p>

            <p style={{ color: status.satisfiesLonerPayoffAssumption ? "green" : "red"}}>
                Assumption 2:{" "}
                {status.satisfiesLonerPayoffAssumption ? "satisfied" : "violated"}
            </p>

            <p
                style={{
                    fontWeight: "bold",
                    color: status.isModelValid ? "green" : "red",
                }}
            >
                Model status:{" "}
                {status.isModelValid
                    ? "valid parameter region"
                    : "outside paper assumptions"}
            </p>
        </section>
    )
}