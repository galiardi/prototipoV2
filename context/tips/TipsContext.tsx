import { createContext } from 'react';
import { TipInterface } from '../../interfaces';

interface ContextProps {
  tips: TipInterface[];
  [category: string]:
    | TipInterface[]
    | { [id: string]: TipInterface | undefined };
  tipsByIdObj: { [id: string]: TipInterface | undefined };
}

export const TipsContext = createContext({} as ContextProps);
