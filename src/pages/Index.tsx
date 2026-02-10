import { useRole } from "@/contexts/RoleContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { announcements, upcomingEvents, placementAlerts, clubHighlights, quickLinks } from "@/data/mockData";
import { ExternalLink, Calendar, Megaphone, Briefcase, Users, ChevronRight, AlertTriangle } from "lucide-react";

const Index = () => {
  const { roleName } = useRole();

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, Ravi! 👋</h1>
        <p className="text-muted-foreground text-sm mt-1">Here's what's happening at CBIT today — viewing as <span className="font-medium text-foreground">{roleName}</span></p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 rounded-xl border bg-card p-3 text-center hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">{link.title}</span>
          </a>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Announcements — 2 cols */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-primary" />
                <CardTitle className="text-base">Announcements</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">View all <ChevronRight className="h-3 w-3 ml-1" /></Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.slice(0, 4).map((a) => (
              <div key={a.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                {a.urgent && <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />}
                {!a.urgent && <div className="h-4 w-4 shrink-0" />}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium truncate">{a.title}</p>
                    <Badge variant="secondary" className="text-[10px] shrink-0">{a.category}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{a.description}</p>
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0">{new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Placement Alerts */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-secondary" />
              <CardTitle className="text-base">Placement Alerts</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {placementAlerts.map((p) => (
              <div key={p.id} className="rounded-lg border p-3 space-y-1.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{p.company}</p>
                  <Badge className="bg-success/10 text-success border-0 text-[10px]">{p.package}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{p.role}</p>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>{p.eligible}</span>
                  <span>Due: {new Date(p.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Events + Clubs row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Events */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <CardTitle className="text-base">Upcoming Events</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">View all <ChevronRight className="h-3 w-3 ml-1" /></Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.slice(0, 4).map((e) => (
              <div key={e.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="text-2xl">{e.image}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{e.title}</p>
                  <p className="text-[11px] text-muted-foreground">{new Date(e.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })} · {e.time}</p>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0">{e.club}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Club Highlights */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-secondary" />
                <CardTitle className="text-base">Club Highlights</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">Explore <ChevronRight className="h-3 w-3 ml-1" /></Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {clubHighlights.map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="text-2xl">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-[11px] text-muted-foreground">{c.recentActivity}</p>
                </div>
                <span className="text-[10px] text-muted-foreground">{c.members} members</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
