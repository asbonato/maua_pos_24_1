import { PayD } from "./PayD";
import { Xpay } from "./Xpay";

export class XpayToPayDAdapter implements PayD {
    private custCardNo!: string;
    private cardOwnerName!: string;
    private cardExpMonthDate!: string;
    private cVVNo!: string;
    private totalAmount!: number;

    private readonly xpay: Xpay;

    constructor(xpay: Xpay){
        this.xpay = xpay;
        this.setProp();
    }

    getCustCardNo(): string {
        return this.custCardNo;
    }
    getCardOwnerName(): string {
        return this.cardOwnerName;
    }
    getCardExpMonthDate(): string {
        return this.cardExpMonthDate;
    }
    getCVVNo(): string {
        return this.cVVNo;
    }
    getTotalAmount(): number {
        return this.totalAmount;
    }
    setCustCardNo(custCardNo: string): void {
        this.custCardNo = custCardNo;
    }
    setCardOwnerName(cardOwnerName: string): void {
        this.cardOwnerName = cardOwnerName;
    }
    setCardExpMonthDate(cardExpMonthDate: string): void {
        this.cardExpMonthDate = cardExpMonthDate;
    }
    setCVVNo(cVVNo: string): void {
        this.cVVNo = cVVNo;
    }
    setTotalAmount(totalAmount: number): void {
        this.totalAmount = totalAmount;
    }
    setProp(): void{
        this.setCardOwnerName(this.xpay.getCustomerName());
        this.setCustCardNo(this.xpay.getCreditCardNo());
        this.setCardExpMonthDate(this.xpay.getCardExpMonth() + 
            "/" + this.xpay.getCardExpYear());
        this.setCVVNo(this.xpay.getCardCVVNo().toString());
        this.setTotalAmount(this.xpay.getAmount());
    }  
}