import Sugar, { createNamespace } from '../core';

createNamespace('Number');

export const {
  defineStatic,
  defineInstance,
  defineStaticAlias,
  defineInstanceAlias,
} = Sugar.Number;

export default Sugar.Number;
