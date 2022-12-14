/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Reference } from './Reference';

export type CustomerMetadata = {
    /**
     * The name of the business the customer is associated with.
     */
    businessName?: string;
    /**
     * A note about the customer.
     */
    note?: string;
    /**
     * The year part of the date of birth for this customer. This part of the date of birth is optional, i.e., it's possible that only dobMonth and dobDay are populated.
     */
    dobYear?: number;
    /**
     * The month part of the date of birth for this customer.
     */
    dobMonth?: number;
    /**
     * The day part of the date of birth for this customer.
     */
    dobDay?: number;
    /**
     * The timestamp from when this customer's data was last updated.
     */
    modifiedTime?: number;
    /**
     * Customer who this metadata belongs to.
     */
    customer?: Reference;
};

