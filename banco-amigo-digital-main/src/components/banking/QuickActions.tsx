
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, CreditCard, Repeat, Plus } from "lucide-react";

export function QuickActions() {
  const actions = [
    { icon: Send, label: "PIX", color: "bg-blue-100 text-blue-600" },
    { icon: CreditCard, label: "Pagar", color: "bg-green-100 text-green-600" },
    { icon: Repeat, label: "Transferir", color: "bg-purple-100 text-purple-600" },
    { icon: Plus, label: "Mais", color: "bg-gray-100 text-gray-600" },
  ];

  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-2">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className="flex flex-col items-center gap-1 h-auto py-3 hover:bg-gray-50"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${action.color}`}>
                <action.icon size={18} />
              </div>
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
