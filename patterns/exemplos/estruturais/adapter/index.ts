import { PayD } from "./PayD";
import { Xpay } from "./Xpay";
import { XpayImpl } from "./XpayImpl";
import { XpayToPayDAdapter } from "./XpayToPayDAdapter";

let xpay: Xpay = new XpayImpl();
xpay.setCreditCardNo('4789565874102365');
xpay.setCustomerName('Max Warner');
xpay.setCardExpMonth('09');
xpay.setCardExpYear('25');
xpay.setCardCVVNo(235);
xpay.setAmount(2565.23);

let payD: PayD = new XpayToPayDAdapter(xpay);
console.log(payD.getCardOwnerName());
console.log(payD.getCustCardNo());
console.log(payD.getCardExpMonthDate());
console.log(payD.getCVVNo());
console.log(payD.getTotalAmount());
