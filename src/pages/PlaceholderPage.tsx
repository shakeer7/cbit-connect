import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Page";

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-8 pb-8 space-y-3">
          <Construction className="h-12 w-12 mx-auto text-muted-foreground" />
          <h2 className="text-xl font-bold">{pageName}</h2>
          <p className="text-sm text-muted-foreground">This module is coming soon. Stay tuned!</p>
        </CardContent>
      </Card>
    </div>
  );
}
