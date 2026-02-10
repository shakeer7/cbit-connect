import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { timetable, attendance, internalMarks, busTimings } from "@/data/mockData";
import { Clock, BookOpen, BarChart3, Bus, FileText, Calendar, Search as SearchIcon, AlertCircle } from "lucide-react";
import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

export default function StudentModule() {
  const [selectedDay, setSelectedDay] = useState<string>(
    days[new Date().getDay() === 0 ? 0 : Math.min(new Date().getDay() - 1, 5)]
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Student Portal</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your academic activities</p>
      </div>

      <Tabs defaultValue="timetable" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="timetable" className="text-xs gap-1"><Clock className="h-3 w-3" />Timetable</TabsTrigger>
          <TabsTrigger value="attendance" className="text-xs gap-1"><BarChart3 className="h-3 w-3" />Attendance</TabsTrigger>
          <TabsTrigger value="marks" className="text-xs gap-1"><FileText className="h-3 w-3" />Marks</TabsTrigger>
          <TabsTrigger value="bus" className="text-xs gap-1"><Bus className="h-3 w-3" />Bus</TabsTrigger>
        </TabsList>

        {/* Timetable */}
        <TabsContent value="timetable">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Weekly Timetable</CardTitle>
              <div className="flex gap-1.5 flex-wrap mt-2">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedDay === day
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {timetable[selectedDay as keyof typeof timetable]?.map((slot, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <div className="text-xs font-mono text-muted-foreground w-24 shrink-0">{slot.time}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{slot.subject}</p>
                      <p className="text-[11px] text-muted-foreground">{slot.faculty} · {slot.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attendance */}
        <TabsContent value="attendance">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {attendance.map((a) => (
              <Card key={a.subject}>
                <CardContent className="pt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{a.subject}</p>
                    <Badge
                      variant={a.percentage >= 85 ? "default" : a.percentage >= 75 ? "secondary" : "destructive"}
                      className="text-[10px]"
                    >
                      {a.percentage}%
                    </Badge>
                  </div>
                  <Progress value={a.percentage} className="h-2" />
                  <p className="text-[11px] text-muted-foreground">{a.attended}/{a.total} classes attended</p>
                  {a.percentage < 75 && (
                    <div className="flex items-center gap-1 text-destructive text-[11px]">
                      <AlertCircle className="h-3 w-3" />
                      <span>Below minimum attendance</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Marks */}
        <TabsContent value="marks">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Internal Marks</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Mid-1</TableHead>
                    <TableHead className="text-center">Mid-2</TableHead>
                    <TableHead className="text-center">Assignment</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {internalMarks.map((m) => (
                    <TableRow key={m.subject}>
                      <TableCell className="font-medium text-sm">{m.subject}</TableCell>
                      <TableCell className="text-center text-sm">{m.mid1}/25</TableCell>
                      <TableCell className="text-center text-sm">{m.mid2}/25</TableCell>
                      <TableCell className="text-center text-sm">{m.assignment}/10</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={m.total >= 50 ? "default" : "secondary"} className="text-xs">
                          {m.total}/{m.max}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bus */}
        <TabsContent value="bus">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Bus Timings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {busTimings.map((b) => (
                  <div key={b.route} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <Badge variant="outline" className="shrink-0 text-xs">{b.route}</Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{b.from}</p>
                      <p className="text-[11px] text-muted-foreground">Via: {b.via}</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-medium">{b.departure}</p>
                      <p className="text-muted-foreground">Arr: {b.arrival}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
