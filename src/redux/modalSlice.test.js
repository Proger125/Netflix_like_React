/* eslint-disable no-undef */

import reducer, { setModalType } from './modalSlice';

describe('Modal slice tests', () => {
  test('should set modal type', () => {
    const previousState = { type: 'none' };
    expect(reducer(previousState, setModalType('edit'))).toEqual({
      type: 'edit',
    });
  });
});
