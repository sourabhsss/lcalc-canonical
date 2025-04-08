
export interface CashBackData {
  purchaseAmount: number;
  cashBackRate: number;
  annualFee?: number;
  otherBenefits?: number;
}

export interface CashBackResult {
  cashBackAmount: number;
  effectiveRate: number;
  annualNetValue: number;
  monthlyReward: number;
}
