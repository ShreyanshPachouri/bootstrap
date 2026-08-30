"use client"

import {  useEffect } from "react"
import { p2pTransferType, TranxState, useBalance, useP2P, useTranx, useTranxList } from "@repo/store";
import type { OnRampTransaction, Balance } from "@repo/db";

interface StateProviderType {
    transactions: OnRampTransaction[] | null;
    balance: Pick<Balance, 'amount' | 'locked'> | null;
    p2p: p2pTransferType[];
    tranxAll: TranxState['tranxList'];
}

export const StateProvider = ( { balance, transactions, p2p, tranxAll} : StateProviderType ) => {
    const updateAmount = useBalance((s) => s.updateAmount);
    const amount = useBalance((s) => s.amount);
    const updateLocked = useBalance((s) => s.updateLocked)
    const locked = useBalance((s) => s.locked)
    const updateTranx = useTranx((s) => s.updateTransactions)
    const tranx = useTranx((s) => s.transactions)
    const updateP2P = useP2P((s) => s.updateP2PTransfers)
    const p2pTransfers = useP2P((s) => s.p2pTransfers)
    const tranxList = useTranxList((s) => s.tranxList)
    const updateTranxList = useTranxList((s) => s.updateTranxList)

    useEffect(() => {
        if ( balance && (balance.amount !== amount || balance.locked !== locked) ) {
            updateAmount(balance.amount);
            updateLocked(balance.locked);
        }
        if (transactions && transactions.length !== tranx.length) {
            updateTranx(transactions);
        }
        if (p2p && p2p.length !== p2pTransfers.length) {
            updateP2P(p2p)
        }
        if (tranxList && tranxList.length !== tranxAll.length) {
            updateTranxList(tranxAll)
        }

    }, [ balance, transactions, updateAmount, updateLocked, updateTranx, amount, locked, tranx, p2pTransfers, p2p, updateP2P, updateTranxList, tranxList, tranxAll])

    return <>
        {null}
    </>
}