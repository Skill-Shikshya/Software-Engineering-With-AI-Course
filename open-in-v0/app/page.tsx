'use client'

import { useState } from 'react'
import {
  Activity,
  Bell,
  ChevronDown,
  Footprints,
  HeartPulse,
  Moon,
  MoreHorizontal,
  Play,
  Plus,
  Settings2,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Watch,
  Zap,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/ui/avatar'
import { Badge } from '@/ui/badge'
import { Button } from '@/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { Progress } from '@/components/ui/progress'

const activity = [42, 58, 46, 72, 63, 81, 68, 77, 64, 88, 74, 92]
const weekly = [
  { day: 'Mon', value: 74 },
  { day: 'Tue', value: 88 },
  { day: 'Wed', value: 62 },
  { day: 'Thu', value: 91 },
  { day: 'Fri', value: 78 },
  { day: 'Sat', value: 95 },
  { day: 'Sun', value: 68 },
]

export default function Page() {
  const [range, setRange] = useState('Today')
  const [tracking, setTracking] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">
        <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar px-5 py-6 lg:flex">
          <div className="flex items-center gap-3 px-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <HeartPulse className="size-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">PulsePath</span>
          </div>
          <nav className="mt-12 flex flex-col gap-2" aria-label="Main navigation">
            <Button className="justify-start gap-3" variant="secondary"><Activity data-icon="inline-start" />Overview</Button>
            <Button className="justify-start gap-3 text-muted-foreground" variant="ghost"><HeartPulse data-icon="inline-start" />Vitals</Button>
            <Button className="justify-start gap-3 text-muted-foreground" variant="ghost"><Moon data-icon="inline-start" />Sleep</Button>
            <Button className="justify-start gap-3 text-muted-foreground" variant="ghost"><Footprints data-icon="inline-start" />Activity</Button>
          </nav>
          <div className="mt-auto rounded-2xl border bg-card p-4">
            <div className="flex items-center gap-2 text-sm font-medium"><Watch className="size-4 text-primary" />Device connected</div>
            <p className="mt-2 text-xs text-muted-foreground">PulseBand Pro · 96% battery</p>
            <div className="mt-4 h-1.5 rounded-full bg-muted"><div className="h-full w-[96%] rounded-full bg-primary" /></div>
            <Button variant="ghost" size="sm" className="mt-3 w-full justify-start px-0 text-muted-foreground"><Settings2 data-icon="inline-start" />Manage device</Button>
          </div>
        </aside>

        <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Wednesday, September 25, 2026</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">Good morning, Alex</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" aria-label="Notifications"><Bell /></Button>
              <Avatar className="size-9"><AvatarFallback>AM</AvatarFallback></Avatar>
            </div>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard icon={<HeartPulse />} label="Heart rate" value="72" unit="BPM" note="Resting · within range" tone="rose" />
            <MetricCard icon={<Moon />} label="Sleep score" value="86" unit="/ 100" note="7h 42m · good recovery" tone="violet" />
            <MetricCard icon={<Footprints />} label="Daily steps" value="7,248" unit="/ 10k" note="2,752 steps to goal" tone="blue" />
            <MetricCard icon={<Thermometer />} label="Body temperature" value="36.6" unit="°C" note="Stable compared to baseline" tone="amber" />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.8fr)]">
            <Card className="overflow-hidden">
              <CardHeader className="flex-row items-start justify-between space-y-0">
                <div><CardTitle className="text-lg">Health overview</CardTitle><CardDescription>Your activity and recovery across the week</CardDescription></div>
                <div className="flex rounded-lg bg-muted p-1" role="group" aria-label="Time range">
                  {['Today', 'Week'].map((item) => <Button key={item} variant={range === item ? 'secondary' : 'ghost'} size="sm" onClick={() => setRange(item)}>{item}</Button>)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-3 border-b pb-5">
                  <div><p className="text-4xl font-semibold tracking-tight">84<span className="ml-1 text-lg font-normal text-muted-foreground">/ 100</span></p><p className="mt-1 flex items-center gap-1 text-sm text-primary"><Sparkles className="size-4" />12% better than last week</p></div>
                  <Badge variant="secondary" className="gap-1"><ShieldCheck className="size-3.5" />Healthy trend</Badge>
                </div>
                <div className="mt-6 flex h-44 items-end gap-2 sm:gap-4">
                  {(range === 'Today' ? activity : weekly.map((item) => item.value)).map((value, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className="relative flex h-36 w-full items-end"><div className="w-full rounded-t-md bg-primary/15 transition-all hover:bg-primary/30" style={{ height: `${value}%` }}><div className="h-1.5 w-full rounded-t-md bg-primary" /></div></div><span className="text-[11px] text-muted-foreground">{range === 'Today' ? `${index * 2 + 7}:00` : weekly[index].day}</span></div>)}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Recovery score</CardTitle><CardDescription>Based on your latest readings</CardDescription></CardHeader>
              <CardContent className="flex flex-col items-center pt-1">
                <div className="relative flex size-44 items-center justify-center rounded-full" style={{ background: 'conic-gradient(hsl(var(--primary)) 0 78%, hsl(var(--muted)) 78% 100%)' }}><div className="flex size-36 flex-col items-center justify-center rounded-full bg-card"><span className="text-4xl font-semibold">78</span><span className="text-xs text-muted-foreground">Good recovery</span></div></div>
                <div className="mt-6 grid w-full grid-cols-2 gap-3"><div className="rounded-xl bg-muted/60 p-3"><p className="text-xs text-muted-foreground">HRV</p><p className="mt-1 text-lg font-semibold">64 <span className="text-xs font-normal text-muted-foreground">ms</span></p></div><div className="rounded-xl bg-muted/60 p-3"><p className="text-xs text-muted-foreground">Resting HR</p><p className="mt-1 text-lg font-semibold">58 <span className="text-xs font-normal text-muted-foreground">bpm</span></p></div></div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
            <Card><CardHeader className="flex-row items-center justify-between space-y-0"><div><CardTitle className="text-lg">Today&apos;s goals</CardTitle><CardDescription>Small steps, meaningful progress</CardDescription></div><Button size="sm" variant="outline"><Plus data-icon="inline-start" />Add goal</Button></CardHeader><CardContent className="grid gap-4 sm:grid-cols-2">
              <Goal icon={<Footprints />} title="Move for 30 minutes" detail="22 of 30 minutes" progress={73} />
              <Goal icon={<Moon />} title="Get quality sleep" detail="7h 42m last night" progress={86} />
              <Goal icon={<Zap />} title="Stay hydrated" detail="5 of 8 glasses" progress={62} />
              <Goal icon={<Activity />} title="Mindful breathing" detail="Complete one session" progress={100} done />
            </CardContent></Card>
            <Card><CardHeader className="flex-row items-center justify-between space-y-0"><div><CardTitle className="text-lg">Quick check-in</CardTitle><CardDescription>Start a guided reading</CardDescription></div><MoreHorizontal className="size-4 text-muted-foreground" /></CardHeader><CardContent><div className="rounded-xl bg-muted/60 p-4"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Watch className="size-5" /></div><div><p className="font-medium">Ready when you are</p><p className="text-xs text-muted-foreground">Keep your wrist relaxed</p></div></div><Button className="mt-4 w-full" onClick={() => setTracking(!tracking)}>{tracking ? 'Reading in progress' : 'Start 60 sec reading'}<Play data-icon="inline-end" /></Button></div></CardContent></Card>
          </div>
        </section>
      </div>
    </main>
  )
}

const toneClasses: Record<string, string> = {
  rose: 'bg-rose-500/10 text-rose-600',
  violet: 'bg-violet-500/10 text-violet-600',
  blue: 'bg-blue-500/10 text-blue-600',
  amber: 'bg-amber-500/10 text-amber-600',
}

function MetricCard({ icon, label, value, unit, note, tone }: { icon: React.ReactNode; label: string; value: string; unit: string; note: string; tone: string }) {
  return <Card><CardContent className="p-5"><div className="flex items-center justify-between"><div className={`flex size-9 items-center justify-center rounded-lg ${toneClasses[tone]}`}>{icon}</div><ChevronDown className="size-4 rotate-[-45deg] text-primary" /></div><p className="mt-5 text-sm text-muted-foreground">{label}</p><p className="mt-1 text-3xl font-semibold tracking-tight">{value} <span className="text-sm font-normal text-muted-foreground">{unit}</span></p><p className="mt-2 text-xs text-muted-foreground">{note}</p></CardContent></Card>
}

function Goal({ icon, title, detail, progress, done = false }: { icon: React.ReactNode; title: string; detail: string; progress: number; done?: boolean }) {
  return <div className="rounded-xl border p-4"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">{icon}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{title}</p><p className="mt-0.5 text-xs text-muted-foreground">{detail}</p></div><Badge variant={done ? 'default' : 'outline'}>{done ? 'Done' : `${progress}%`}</Badge></div><Progress value={progress} className="mt-4 h-1.5" /></div>
}
