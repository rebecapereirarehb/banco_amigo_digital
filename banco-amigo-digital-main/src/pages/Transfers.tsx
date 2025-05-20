
import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Transfers() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Transferências</h1>
        
        <Tabs defaultValue="pix" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pix">Pix</TabsTrigger>
            <TabsTrigger value="ted">TED</TabsTrigger>
            <TabsTrigger value="scheduled">Agendamentos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pix">
            <Card>
              <CardHeader>
                <CardTitle>Transferência via Pix</CardTitle>
                <CardDescription>
                  Transfira para qualquer banco instantaneamente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pixKey">Chave Pix</Label>
                  <Input id="pixKey" placeholder="CPF, e-mail, telefone ou chave aleatória" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Valor</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                    <Input id="amount" className="pl-8" placeholder="0,00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição (opcional)</Label>
                  <Input id="description" placeholder="Descrição da transferência" />
                </div>
                <Button className="w-full">Transferir</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ted">
            <Card>
              <CardHeader>
                <CardTitle>Transferência TED</CardTitle>
                <CardDescription>
                  Transferências entre bancos com compensação no mesmo dia.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bank">Banco</Label>
                    <Select>
                      <SelectTrigger id="bank">
                        <SelectValue placeholder="Selecione o banco" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="001">Banco do Brasil</SelectItem>
                        <SelectItem value="104">Caixa Econômica</SelectItem>
                        <SelectItem value="341">Itaú</SelectItem>
                        <SelectItem value="033">Santander</SelectItem>
                        <SelectItem value="237">Bradesco</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Tipo de Conta</Label>
                    <Select>
                      <SelectTrigger id="accountType">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cc">Conta Corrente</SelectItem>
                        <SelectItem value="cp">Conta Poupança</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agency">Agência</Label>
                    <Input id="agency" placeholder="Número da agência" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account">Conta</Label>
                    <Input id="account" placeholder="Número da conta" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Nome do Destinatário</Label>
                  <Input id="recipientName" placeholder="Nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientDocument">CPF/CNPJ do Destinatário</Label>
                  <Input id="recipientDocument" placeholder="Documento do destinatário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tedAmount">Valor</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                    <Input id="tedAmount" className="pl-8" placeholder="0,00" />
                  </div>
                </div>
                <Button className="w-full">Transferir</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle>Transferências Agendadas</CardTitle>
                <CardDescription>
                  Gerenciamento das suas transferências agendadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border p-4 text-center">
                  <p className="text-sm text-muted-foreground">Você não possui transferências agendadas.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
