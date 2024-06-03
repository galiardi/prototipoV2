import { UIState } from '.';

type UIActionType =
  | { type: '[UI] - open sidebar' }
  | { type: '[UI] - close sidebar' }
  | { type: '[UI] - open product-added modal' }
  | { type: '[UI] - close product-added modal' }
  | { type: '[UI] - open stock-warning modal' }
  | { type: '[UI] - close stock-warning modal' }
  | { type: '[UI] - show purchase modal'; payload: boolean }
  | { type: '[UI] - show copy toast'; payload: boolean }
  | { type: '[UI] - show phone modal'; payload: boolean }
  | { type: '[UI] - show signin modal'; payload: boolean }
  | { type: '[UI] - turn present value switch'; payload: boolean }
  | { type: '[UI] - change adjust contributions checkbox'; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - open sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };

    case '[UI] - close sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };

    case '[UI] - open product-added modal':
      return {
        ...state,
        addToCartModalOpen: true,
      };

    case '[UI] - close product-added modal':
      return {
        ...state,
        addToCartModalOpen: false,
      };

    case '[UI] - open stock-warning modal':
      return {
        ...state,
        stockWarningModalOpen: true,
      };

    case '[UI] - close stock-warning modal':
      return {
        ...state,
        stockWarningModalOpen: false,
      };

    case '[UI] - show purchase modal':
      return {
        ...state,
        purchaseModalOpen: action.payload,
      };

    case '[UI] - show copy toast':
      return {
        ...state,
        copyToastOpen: action.payload,
      };

    case '[UI] - show phone modal':
      return {
        ...state,
        phoneModalOpen: action.payload,
      };

    case '[UI] - show signin modal':
      return {
        ...state,
        signinOpen: action.payload,
      };

    case '[UI] - turn present value switch':
      return {
        ...state,
        isPresentValueSwitchChecked: action.payload,
      };

    case '[UI] - change adjust contributions checkbox':
      return {
        ...state,
        isAdjustContributionsChecked: action.payload,
      };

    default:
      return state;
  }
};
