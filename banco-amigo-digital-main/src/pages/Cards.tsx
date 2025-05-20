
import { Layout } from "@/components/layout/Layout";
import { CreditCardWidget } from "@/components/banking/CreditCardWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, Shield, CreditCard as CardIcon } from "lucide-react";
import { useState } from "react";

export default function Cards() {
  const [showCardDetails, setShowCardDetails] = useState(false);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Seus Cartões</h1>
        
        <Tabs defaultValue="creditCard" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="creditCard">Cartão de Crédito</TabsTrigger>
            <TabsTrigger value="debitCard">Cartão de Débito</TabsTrigger>
          </TabsList>
          
          <TabsContent value="creditCard" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <CreditCardWidget 
                  cardNumber={showCardDetails ? "5432 1098 7654 3210" : "**** **** **** 3210"}
                  cardHolder="Maria Silva"
                  expiryDate="12/28"
                  spendingLimit={8000}
                  currentSpending={4250}
                />
                <div className="mt-4 flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setShowCardDetails(!showCardDetails)}
                    className="flex items-center gap-2"
                  >
                    {showCardDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showCardDetails ? "Ocultar detalhes" : "Mostrar detalhes"}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informações do Cartão</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Titular</p>
                        <p className="font-medium">Maria Silva</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Vencimento</p>
                        <p className="font-medium">Todo dia 10</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Melhor dia de compra</p>
                      <p className="font-medium">Até dia 12 de cada mês</p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 items-center">
                    <Lock className="h-5 w-5" />
                    <span>Bloquear cartão</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 items-center">
                    <Shield className="h-5 w-5" />
                    <span>Alterar senha</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fatura Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">Mercado Vila Nova</p>
                      <p className="text-sm text-muted-foreground">15/06/2025</p>
                    </div>
                    <p className="font-medium">R$ 189,45</p>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">Farmácia Saúde Total</p>
                      <p className="text-sm text-muted-foreground">12/06/2025</p>
                    </div>
                    <p className="font-medium">R$ 75,32</p>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">Netflix</p>
                      <p className="text-sm text-muted-foreground">10/06/2025</p>
                    </div>
                    <p className="font-medium">R$ 39,90</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0">Ver fatura completa</Button>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total da fatura</p>
                      <p className="text-lg font-bold">R$ 4.250,00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="debitCard" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-blue-800 to-blue-500 p-6 text-white">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-sm opacity-80">Cartão de Débito</p>
                      <p className="text-xl font-bold">Digital Bank</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-white/40"></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm opacity-80">Número do Cartão</p>
                    <p className="text-lg font-medium">{showCardDetails ? "4321 8765 2109 5678" : "**** **** **** 5678"}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs opacity-80">Titular</p>
                      <p className="text-sm font-medium">Maria Silva</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80">Validade</p>
                      <p className="text-sm font-medium">11/29</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setShowCardDetails(!showCardDetails)}
                      className="flex items-center gap-2"
                    >
                      {showCardDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {showCardDetails ? "Ocultar detalhes" : "Mostrar detalhes"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Funções do Cartão de Débito</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 items-center">
                        <CardIcon className="h-5 w-5" />
                        <span>Alterar função</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 items-center">
                        <Lock className="h-5 w-5" />
                        <span>Bloquear cartão</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Configurações</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Compras internacionais</span>
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Ativo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Compras online</span>
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Ativo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pagamento por aproximação</span>
                      <span className="text-sm px-2 py-1 bg-red-100 text-red-800 rounded-full">Inativo</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
