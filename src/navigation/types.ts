export type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  EntregarOrden: { order: { orderId: string; status: string } }; // Cambiado a "EntregarOrden"
  PanicNotification: { order: { orderId: string; status: string } };
  Detalles: { order: any };
  DocumentsScreen: {
    order: {
      orderId: string;
      status: string;
    };
    document: {
      documentName: string;
      mandatory: number;
      attachRecId: number;
      url: string;
      recId: string;
    };
  };
  DeliverOrder: { order: { orderId: string; status: string } }; // Agregado DeliverOrder
  Camera: { document: { documentName: string } };
  OrderLines: undefined;
};

export interface TransportOrder {
  orderId: string;
}