export interface PayD{
    getCustCardNo(): string;
    getCardOwnerName(): string;
    getCardExpMonthDate(): string;
    getCVVNo(): string;
    getTotalAmount(): number;

    setCustCardNo(custCardNo: string): void;
    setCardOwnerName(cardOwnerName: string): void;
    setCardExpMonthDate(cardExpMonthDate: string): void;
    setCVVNo(cVVNo: string): void;
    setTotalAmount(totalAmount: number): void;
}