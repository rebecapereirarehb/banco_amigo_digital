
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  BellIcon,
  LockIcon,
  ShieldIcon,
  UserIcon,
  CreditCardIcon,
  SmartphoneIcon,
  HelpCircleIcon,
  AlertTriangleIcon,
} from "lucide-react";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Configurações</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="preferences">Preferências</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>Informações Pessoais</span>
                </CardTitle>
                <CardDescription>
                  Atualize suas informações pessoais e dados de contato.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-2xl font-medium text-gray-500">MS</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" size="sm">Alterar foto</Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" value="Maria Silva" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <Input id="cpf" value="123.456.789-00" disabled />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="birthday">Data de nascimento</Label>
                      <Input id="birthday" value="15/05/1988" disabled />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value="maria.silva@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" value="(11) 98765-4321" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid gap-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" value="Rua das Flores, 123" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" value="São Paulo" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" value="SP" />
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="zipcode">CEP</Label>
                    <Input id="zipcode" value="01234-567" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Salvar alterações</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LockIcon className="h-5 w-5" />
                    <span>Segurança da Conta</span>
                  </CardTitle>
                  <CardDescription>
                    Gerencie as configurações de segurança da sua conta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Alterar senha</p>
                        <p className="text-sm text-muted-foreground">Atualize sua senha regularmente para maior segurança</p>
                      </div>
                      <Button variant="outline">Alterar</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Autenticação de dois fatores</p>
                        <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta</p>
                      </div>
                      <Button variant="outline">Configurar</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Reconhecimento facial</p>
                        <p className="text-sm text-muted-foreground">Use seu rosto para autenticar transações</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Impressão digital</p>
                        <p className="text-sm text-muted-foreground">Use sua digital para acessar o aplicativo</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon className="h-5 w-5" />
                    <span>Limites e Permissões</span>
                  </CardTitle>
                  <CardDescription>
                    Configure limites de transações e permissões de segurança.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Limite diário de transferências</p>
                      <p className="text-sm text-muted-foreground">Limite máximo para transferências em um dia</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$ 5.000,00</p>
                      <Button variant="link" className="p-0 h-auto">Alterar</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Limite de Pix</p>
                      <p className="text-sm text-muted-foreground">Limite máximo para transações via Pix</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$ 3.000,00</p>
                      <Button variant="link" className="p-0 h-auto">Alterar</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Transações internacionais</p>
                      <p className="text-sm text-muted-foreground">Permitir transações em outros países</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BellIcon className="h-5 w-5" />
                  <span>Preferências de Notificações</span>
                </CardTitle>
                <CardDescription>
                  Personalize como e quando deseja receber notificações.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Todas as transações</p>
                      <p className="text-sm text-muted-foreground">Receba notificações para cada transação realizada</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Alertas de segurança</p>
                      <p className="text-sm text-muted-foreground">Alertas sobre atividades suspeitas</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Vencimento de faturas</p>
                      <p className="text-sm text-muted-foreground">Alertas sobre faturas próximas do vencimento</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Promoções e ofertas</p>
                      <p className="text-sm text-muted-foreground">Receba ofertas e promoções personalizadas</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">Receba notificações via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">SMS</p>
                      <p className="text-sm text-muted-foreground">Receba notificações via SMS</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Push</p>
                      <p className="text-sm text-muted-foreground">Receba notificações push no seu dispositivo</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SmartphoneIcon className="h-5 w-5" />
                    <span>Aparência</span>
                  </CardTitle>
                  <CardDescription>
                    Personalize a aparência do aplicativo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Tema escuro</p>
                      <p className="text-sm text-muted-foreground">Ativar modo escuro para o aplicativo</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Ocultar valores</p>
                      <p className="text-sm text-muted-foreground">Esconder saldos e valores por padrão</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCardIcon className="h-5 w-5" />
                    <span>Preferências de Pagamento</span>
                  </CardTitle>
                  <CardDescription>
                    Configure suas preferências de pagamento.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Cartão padrão</p>
                      <p className="text-sm text-muted-foreground">Selecione seu cartão padrão para pagamentos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Final 3210</p>
                      <Button variant="link" className="p-0 h-auto">Alterar</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Método de pagamento preferido</p>
                      <p className="text-sm text-muted-foreground">Selecione seu método de pagamento padrão</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Pix</p>
                      <Button variant="link" className="p-0 h-auto">Alterar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircleIcon className="h-5 w-5" />
                    <span>Ajuda e Suporte</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <Button variant="outline" className="justify-start">
                      <HelpCircleIcon className="mr-2 h-4 w-4" />
                      Central de Ajuda
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <AlertTriangleIcon className="mr-2 h-4 w-4" />
                      Reportar um problema
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Versão do aplicativo: 1.0.0</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
