import * as t from 'io-ts';
import { extendCodec, Logger, instanceofCodec, nullable } from '@faast/ts-common';
import { BaseTransactionInfo, BaseUnsignedTransaction, BaseSignedTransaction, BaseBroadcastResult, CreateTransactionOptions, BaseConfig, } from '@faast/payments-common';
import { RippleAPI } from 'ripple-lib';
export { CreateTransactionOptions };
export const BaseRipplePaymentsConfig = extendCodec(BaseConfig, {}, {
    server: t.string,
    logger: Logger,
    maxLedgerVersionOffset: t.number,
}, 'BaseRipplePaymentsConfig');
export const HdRipplePaymentsConfig = extendCodec(BaseRipplePaymentsConfig, {
    hdKey: t.string,
}, 'HdRipplePaymentsConfig');
export const RippleKeyPair = t.type({
    publicKey: t.string,
    privateKey: t.string,
}, 'RippleKeyPair');
export const RippleSecretPair = t.type({
    address: t.string,
    secret: t.string,
}, 'RippleSecretPair');
export const RippleAccountConfig = t.union([t.string, RippleSecretPair, RippleKeyPair], 'RippleAccountConfig');
export const AccountRipplePaymentsConfig = extendCodec(BaseRipplePaymentsConfig, {
    hotAccount: RippleAccountConfig,
    depositAccount: RippleAccountConfig,
}, 'AccountRipplePaymentsConfig');
export const RipplePaymentsConfig = t.union([HdRipplePaymentsConfig, AccountRipplePaymentsConfig], 'RipplePaymentsConfig');
export const RippleUnsignedTransaction = extendCodec(BaseUnsignedTransaction, {
    amount: t.string,
    fee: t.string,
}, 'RippleUnsignedTransaction');
export const RippleSignedTransaction = extendCodec(BaseSignedTransaction, {
    id: t.string,
}, 'RippleSignedTransaction');
export const RippleTransactionInfo = extendCodec(BaseTransactionInfo, {
    confirmationNumber: nullable(t.number),
}, {}, 'RippleTransactionInfo');
export const RippleBroadcastResult = extendCodec(BaseBroadcastResult, {
    rebroadcast: t.boolean,
    data: t.object,
}, 'RippleBroadcastResult');
export const RippleBalanceMonitorConfig = extendCodec(BaseConfig, {
    server: t.union([t.string, instanceofCodec(RippleAPI)]),
}, 'RippleBalanceMonitorConfig');
export const RippleCreateTransactionOptions = extendCodec(CreateTransactionOptions, {}, {
    maxLedgerVersionOffset: t.number,
    sequence: t.number,
    payportBalance: t.string,
}, 'RippleCreateTransactionOptions');
//# sourceMappingURL=types.js.map