import * as actionTypes from './employee.action-types';
import { initialState, EmployeeState } from './employee.state';

export function reducer(
  state: EmployeeState,
  action: actionTypes.EmployeeAction
): EmployeeState {
  switch (action.type) {
    // we return the new state of a given action
    case actionTypes.EMPLOYEE_ACTION:
      return { ...initialState };

    default:
      return state;
  }
}
