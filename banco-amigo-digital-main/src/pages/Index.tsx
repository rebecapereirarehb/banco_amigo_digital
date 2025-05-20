
import { Layout } from "@/components/layout/Layout";
import { AccountBalance } from "@/components/banking/AccountBalance";
import { QuickActions } from "@/components/banking/QuickActions";
import { TransactionHistory } from "@/components/banking/TransactionHistory";
import { CreditCardWidget } from "@/components/banking/CreditCardWidget";

const Index = () => {
  // Mock data for demonstration
  const transactions = [
    {
      id: "1",
      type: "deposit" as const,
      title: "Salário",
      description: "Empresa ABC Ltda",
      amount: 3500,
      date: "15 Mai, 10:30",
    },
    {
      id: "2",
      type: "payment" as const,
      title: "Netflix",
      description: "Assinatura Mensal",
      amount: 39.9,
      date: "14 Mai, 13:45",
    },
    {
      id: "3",
      type: "purchase" as const,
      title: "Supermercado",
      description: "Compras do mês",
      amount: 350.75,
      date: "12 Mai, 18:22",
    },
    {
      id: "4",
      type: "withdrawal" as const,
      title: "Saque",
      description: "Caixa 24h",
      amount: 200,
      date: "10 Mai, 14:15",
    },
  ];

  return (
    <Layout>
      <div className="grid gap-6">
        <h1 className="text-2xl font-bold">Olá, João</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <AccountBalance balance={4850.75} />
            <QuickActions />
          </div>
          <div className="md:col-span-1">
            <CreditCardWidget 
              number="5432"
              expiryDate="12/27"
              cardholderName="JOÃO D SILVA"
              limit={5000}
              used={3200}
            />
          </div>
        </div>
        
        <TransactionHistory transactions={transactions} />
      </div>
    </Layout>
  );
};

export default Index;
