export type Expense = {
  _id?: string;
  description: string;
  value: number;
  currency: string;
  category: string;
  userId: string;
  dateCreated: Date;
};
