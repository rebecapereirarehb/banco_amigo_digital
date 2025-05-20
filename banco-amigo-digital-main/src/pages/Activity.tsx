
import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Activity() {
  const transactions = [
    {
      id: 1,
      description: "Transferência recebida",
      from: "João Pereira",
      amount: 1250.00,
      date: "19/05/2025",
      time: "14:32",
      type: "received",
    },
    {
      id: 2,
      description: "Pagamento de conta",
      to: "Energia Elétrica",
      amount: 187.45,
      date: "18/05/2025",
      time: "09:15",
      type: "payment",
    },
    {
      id: 3,
      description: "Transferência enviada",
      to: "Maria Oliveira",
      amount: 500.00,
      date: "17/05/2025",
      time: "16:45",
      type: "sent",
    },
    {
      id: 4,
      description: "Compra com cartão de débito",
      to: "Supermercado Extra",
      amount: 156.78,
      date: "16/05/2025",
      time: "11:23",
      type: "debit",
    },
    {
      id: 5,
      description: "Depósito",
      amount: 2000.00,
      date: "15/05/2025",
      time: "13:54",
      type: "deposit",
    },
    {
      id: 6,
      description: "Compra com cartão de crédito",
      to: "Amazon",
      amount: 219.90,
      date: "14/05/2025",
      time: "20:17",
      type: "credit",
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "received":
      case "deposit":
        return <ArrowDownIcon className="h-5 w-5 text-green-500" />;
      case "sent":
        return <ArrowUpIcon className="h-5 w-5 text-red-500" />;
      default:
        return <ArrowRightIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "received":
      case "deposit":
        return "text-green-600";
      case "sent":
      case "payment":
      case "debit":
      case "credit":
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-3xl font-bold">Atividade</h1>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Pesquisar transação" className="pl-9" />
            </div>
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Últimos 30 dias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Últimos 7 dias</SelectItem>
                <SelectItem value="30days">Últimos 30 dias</SelectItem>
                <SelectItem value="90days">Últimos 90 dias</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Tudo</TabsTrigger>
            <TabsTrigger value="received">Recebidas</TabsTrigger>
            <TabsTrigger value="sent">Enviadas</TabsTrigger>
            <TabsTrigger value="payments">Pagamentos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>Todas as Transações</CardTitle>
                <CardDescription>
                  Visualize todas as suas movimentações financeiras.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{transaction.description}</p>
                        {transaction.from && <p className="text-sm text-muted-foreground">De: {transaction.from}</p>}
                        {transaction.to && <p className="text-sm text-muted-foreground">Para: {transaction.to}</p>}
                        <p className="text-xs text-muted-foreground">{transaction.date} às {transaction.time}</p>
                      </div>
                      <div className={`font-bold ${getTransactionColor(transaction.type)}`}>
                        {transaction.type === "received" || transaction.type === "deposit" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">Carregar mais transações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="received">
            <Card>
              <CardHeader>
                <CardTitle>Transações Recebidas</CardTitle>
                <CardDescription>
                  Visualize todos os valores recebidos na sua conta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter(t => t.type === "received" || t.type === "deposit")
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{transaction.description}</p>
                          {transaction.from && <p className="text-sm text-muted-foreground">De: {transaction.from}</p>}
                          <p className="text-xs text-muted-foreground">{transaction.date} às {transaction.time}</p>
                        </div>
                        <div className="font-bold text-green-600">
                          +{formatCurrency(transaction.amount)}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sent">
            <Card>
              <CardHeader>
                <CardTitle>Transações Enviadas</CardTitle>
                <CardDescription>
                  Visualize todas as suas transferências enviadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter(t => t.type === "sent")
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{transaction.description}</p>
                          {transaction.to && <p className="text-sm text-muted-foreground">Para: {transaction.to}</p>}
                          <p className="text-xs text-muted-foreground">{transaction.date} às {transaction.time}</p>
                        </div>
                        <div className="font-bold text-red-600">
                          -{formatCurrency(transaction.amount)}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Pagamentos</CardTitle>
                <CardDescription>
                  Visualize todos os seus pagamentos de contas e boletos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter(t => t.type === "payment")
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{transaction.description}</p>
                          {transaction.to && <p className="text-sm text-muted-foreground">Para: {transaction.to}</p>}
                          <p className="text-xs text-muted-foreground">{transaction.date} às {transaction.time}</p>
                        </div>
                        <div className="font-bold text-red-600">
                          -{formatCurrency(transaction.amount)}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
