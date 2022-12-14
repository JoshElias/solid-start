/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalChargeAmount } from './AdditionalChargeAmount';
import type { AppTracking } from './AppTracking';
import type { CardTransaction } from './CardTransaction';
import type { GermanInfo } from './GermanInfo';
import type { OceanGatewayInfo } from './OceanGatewayInfo';
import type { Reference } from './Reference';
import type { ServiceChargeAmount } from './ServiceChargeAmount';
import type { TaxableAmountRate } from './TaxableAmountRate';
import type { Tender } from './Tender';
import type { TransactionInfo } from './TransactionInfo';

export type Refund = {
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * The order with which the refund is associated
     */
    orderRef?: Reference;
    /**
     * Device which processed the transaction for this refund, a 128-bit UUID, not a normal base-13 Clover ID.
     */
    device?: Reference;
    /**
     * Total amount refunded, including tax and tip
     */
    amount?: number;
    /**
     * Tax amount refunded
     */
    taxAmount?: number;
    /**
     * Tip amount refunded
     */
    tipAmount?: number;
    /**
     * The time when the refund was recorded on the server
     */
    createdTime?: number;
    /**
     * The time when the refund was recorded on the client
     */
    clientCreatedTime?: number;
    /**
     * The time when the refund was processed by the gateway
     */
    gatewayProcessingTime?: number;
    /**
     * The payment with which the refund is associated
     */
    payment?: Reference;
    employee?: Reference;
    lineItems?: Array<Reference>;
    /**
     * The tender type associated with this payment, e.g. credit card, cash, etc.
     */
    overrideMerchantTender?: Tender;
    taxableAmountRates?: Array<TaxableAmountRate>;
    serviceChargeAmount?: ServiceChargeAmount;
    additionalCharges?: Array<AdditionalChargeAmount>;
    attributes?: {
        default?: string;
    };
    /**
     * German region-specific information
     */
    germanInfo?: GermanInfo;
    /**
     * Tracking information for the app that created this refund.
     */
    appTracking?: AppTracking;
    voided?: boolean;
    voidReason?: string;
    /**
     * Information about the card used for credit or debit card refunds
     */
    cardTransaction?: CardTransaction;
    /**
     * Transaction information
     */
    transactionInfo?: TransactionInfo;
    merchant?: Reference;
    /**
     * The external reference id if associated with the refund
     */
    externalReferenceId?: string;
    /**
     * Auth code generated by the acquire
     */
    authCode?: string;
    /**
     * Status of the refund.It can be Fail/Success/Pending
     */
    status?: Refund.status;
    /**
     * Ocean Gateway info - for India region
     */
    oceanGatewayInfo?: OceanGatewayInfo;
    /**
     * Reason why the refund was initiated
     */
    reason?: string;
};

export namespace Refund {

    /**
     * Status of the refund.It can be Fail/Success/Pending
     */
    export enum status {
        FAIL = 'FAIL',
        SUCCESS = 'SUCCESS',
        PENDING = 'PENDING',
    }


}

