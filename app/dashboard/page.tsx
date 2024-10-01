import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardStats } from "../components/dashboard/DashboardStats";

export default function Dashboard() {
  return (
    <>
      <DashboardStats />

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Ameen Alam</p>
                <p className="text-sm text-muted-foreground">
                  ameenalam98@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Ameen Alam</p>
                <p className="text-sm text-muted-foreground">
                  ameenalam98@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Ameen Alam</p>
                <p className="text-sm text-muted-foreground">
                  ameenalam98@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Ameen Alam</p>
                <p className="text-sm text-muted-foreground">
                  ameenalam98@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
