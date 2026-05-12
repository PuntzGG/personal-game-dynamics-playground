import type { ModelParams } from "./types";

export type AssumptionStatus = {
    satisfiesInterestAssumption: boolean;
    satisfiesLonerPayoffAssumption: boolean;
    isModelValid: boolean;
};

export function checkAssumptions(params: ModelParams): AssumptionStatus {
    const satisfiesInterestAssumption =
        params.interestRate > 1 && params.interestRate < params.groupSize;
    
    const satisfiesLonerPayoffAssumption =
        params.lonerPayoff > 0 && params.lonerPayoff < params.interestRate - 1;
    
    const isModelValid =
        satisfiesInterestAssumption && satisfiesLonerPayoffAssumption;

    return {
        satisfiesInterestAssumption,
        satisfiesLonerPayoffAssumption,
        isModelValid,
    };
}