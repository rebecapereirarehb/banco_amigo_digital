
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CreditCardWidgetProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  className?: string;
  spendingLimit?: number;
  currentSpending?: number;
}

export function CreditCardWidget({
  cardNumber = "**** **** **** 1234",
  cardHolder = "John Doe",
  expiryDate = "09/28",
  className,
  spendingLimit = 5000,
  currentSpending = 3250,
}: CreditCardWidgetProps) {
  // Calculate percentage of spending limit used
  const percentageUsed = Math.min(100, (currentSpending / spendingLimit) * 100);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 p-6 text-white">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm opacity-80">Cartão de Crédito</p>
            <p className="text-xl font-bold">Digital Bank</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-white/40"></div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm opacity-80">Número do Cartão</p>
          <p className="text-lg font-medium">{cardNumber}</p>
        </div>
        
        <div className="flex justify-between">
          <div>
            <p className="text-xs opacity-80">Titular</p>
            <p className="text-sm font-medium">{cardHolder}</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Validade</p>
            <p className="text-sm font-medium">{expiryDate}</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Limite Utilizado</span>
            <span className="font-medium">{formatCurrency(currentSpending)} / {formatCurrency(spendingLimit)}</span>
          </div>
          <Progress 
            value={percentageUsed} 
            className="h-2 bg-gray-100"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-2">
            <p className="text-xs text-muted-foreground">Fatura Atual</p>
            <p className="font-semibold">{formatCurrency(currentSpending)}</p>
          </div>
          <div className="p-2">
            <p className="text-xs text-muted-foreground">Limite Disponível</p>
            <p className="font-semibold">{formatCurrency(spendingLimit - currentSpending)}</p>
          </div>
          <div className="p-2">
            <p className="text-xs text-muted-foreground">Fechamento</p>
            <p className="font-semibold">15/07</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
