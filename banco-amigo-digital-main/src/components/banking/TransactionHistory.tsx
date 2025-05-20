
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  ArrowDown, 
  ArrowUp, 
  CreditCard, 
  ShoppingBag 
} from "lucide-react";

type TransactionType = "deposit" | "withdrawal" | "payment" | "purchase";

interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  date: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const getTransactionIcon = (type: TransactionType) => {
    switch (type) {
      case "deposit":
        return <ArrowDown className="text-green-500" size={18} />;
      case "withdrawal":
        return <ArrowUp className="text-red-500" size={18} />;
      case "payment":
        return <CreditCard className="text-blue-500" size={18} />;
      case "purchase":
        return <ShoppingBag className="text-purple-500" size={18} />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Transações Recentes</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 border-t"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {getTransactionIcon(transaction.type)}
                </div>
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.description}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${transaction.type === "deposit" ? "text-green-600" : "text-gray-900"}`}>
                  {transaction.type === "deposit" ? "+" : ""}{formatCurrency(transaction.amount)}
                </p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
