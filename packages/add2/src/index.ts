import { AddAPI } from './types';
import { add } from '@harpsealjs/add';

export const add2: AddAPI = (a, b) => add(a, 2 * b);