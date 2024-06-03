import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  addToCartModalOpen: boolean;
  stockWarningModalOpen: boolean;
  purchaseModalOpen: boolean;
  copyToastOpen: boolean;
  phoneModalOpen: boolean;
  signinOpen: boolean;
  isPresentValueSwitchChecked: boolean;
  isAdjustContributionsChecked: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  addToCartModalOpen: false,
  stockWarningModalOpen: false,
  purchaseModalOpen: false,
  copyToastOpen: false,
  phoneModalOpen: false,
  signinOpen: false,
  isPresentValueSwitchChecked: false,
  isAdjustContributionsChecked: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({ type: '[UI] - open sidebar' });
  };

  const closeSidemenu = () => {
    dispatch({ type: '[UI] - close sidebar' });
  };

  const openAddToCartModal = () => {
    dispatch({ type: '[UI] - open product-added modal' });
  };

  const closeAddToCartModal = () => {
    dispatch({ type: '[UI] - close product-added modal' });
  };

  const openStockWarningModal = () => {
    dispatch({ type: '[UI] - open stock-warning modal' });
  };

  const closeStockWarningModal = () => {
    dispatch({ type: '[UI] - close stock-warning modal' });
  };

  const showPurchaseModal = (arg: boolean) => {
    dispatch({ type: '[UI] - show purchase modal', payload: arg });
  };

  const showCopyToast = (arg: boolean) => {
    dispatch({ type: '[UI] - show copy toast', payload: arg });
  };

  const showPhoneModal = (arg: boolean) => {
    dispatch({ type: '[UI] - show phone modal', payload: arg });
  };

  const showSigninModal = (arg: boolean) => {
    dispatch({ type: '[UI] - show signin modal', payload: arg });
  };

  const turnPresentValueSwitch = (arg: boolean) => {
    dispatch({ type: '[UI] - turn present value switch', payload: arg });
  };

  const changeAdjustContributions = (arg: boolean) => {
    dispatch({
      type: '[UI] - change adjust contributions checkbox',
      payload: arg,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidemenu,
        closeSidemenu,
        openAddToCartModal,
        closeAddToCartModal,
        openStockWarningModal,
        closeStockWarningModal,
        showPurchaseModal,
        showCopyToast,
        showPhoneModal,
        showSigninModal,
        turnPresentValueSwitch,
        changeAdjustContributions,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
