export type OrderStatus = "pending" | "approved" | "cancelled" | "expired" | "refunded";

export interface Order {
  id?: number;
  transactionId: number;
  tracking: string;
  amount: number; // em centavos
  paymentMethod: "pix";
  status: OrderStatus;
  customerName?: string;
  customerEmail?: string;
  externalId?: string;
  secureId?: string;
  secureUrl?: string;
  gateway?: 'primary' | 'secondary';
  created_at?: string;
  updated_at?: string;
}


