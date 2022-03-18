// @flow
import { fork } from "redux-saga/effects";
import companies from "./companies";
import genericAdme from "./genericAdme";

// eslint-disable-next-line flowtype/require-return-type
export default function* admeSaga() {
    yield fork(companies);
    yield fork(genericAdme);
}
