
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface AccountBalanceProps {
  balance: number;
  currency?: string;
}

export function AccountBalance({ balance, currency = "R$" }: AccountBalanceProps) {
  const [showBalance, setShowBalance] = useState(true);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="bg-gradient-bank text-white rounded-t-lg py-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Saldo Disponível</CardTitle>
          <button onClick={toggleBalance} className="text-white/80 hover:text-white">
            {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <div className="flex flex-col">
          <span className="text-3xl font-bold">
            {showBalance ? formatCurrency(balance) : "••••••"}
          </span>
          <span className="text-muted-foreground text-sm mt-1">
            Atualizado hoje às 10:45
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
