import { TRANSPORTORDER } from "../Types/types";

interface TransportOrderState {
  company: string;
  update: boolean;
  error: boolean;
  transportOrders: any[]; // Cambia `any` por el tipo específico si lo conoces
  transportOrder: any; // Cambia `any` por el tipo específico si lo conoces
  loading: boolean;
  orderState: string;
  orderStates: { label: string; value: string }[];
}

interface TransportOrderAction {
  type: string;
  payload?: any; // Cambia `any` por un tipo más específico si es posible
}

export const TransportOrderReducer = (
  state: TransportOrderState,
  action: TransportOrderAction
): TransportOrderState => {
  switch (action.type) {
    case TRANSPORTORDER.TRANSPORTORDER:
      return {
        ...state,
        transportOrders: action.payload.data,
        loading: action.payload.loading,
        update: action.payload.update,
      };
    case TRANSPORTORDER.SETTRANSPORTORDER:
      return {
        ...state,
        transportOrder: action.payload,
      };
    case TRANSPORTORDER.COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case TRANSPORTORDER.UPDATE:
      return {
        ...state,
        update: action.payload,
      };
    case TRANSPORTORDER.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TRANSPORTORDER.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TRANSPORTORDER.ORDERSTATE:
      return {
        ...state,
        orderState: action.payload,
      };
    default:
      return state;
  }
};