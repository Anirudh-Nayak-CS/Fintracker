import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle} from './ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';

const stats = [
  {
    title: 'Income',
    value: 122380,
    delta: 15.1,
    lastMonth: 105922,
    positive: true,
    prefix: '',
    suffix: '',
  },
  {
    title:'Expenditure',
    value: 1902380,
    delta: -2.0,
    lastMonth: 2002098,
    positive: false,
    prefix: '',
    suffix: '',
  },
  {
    title: 'Balance',
    value: 98100000,
    delta: 0.4,
    lastMonth: 97800000,
    positive: true,
    prefix: '$',
    suffix: 'M',
    format: (v) => `$${(v / 1_000_000).toFixed(1)}M`,
    lastFormat: (v) => `$${(v / 1_000_000).toFixed(1)}M`,
  },

];

function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}

export default function Stats() {
  return (
    <div className="min-h-screen flex items-start justify-start p-6 lg:p-8 mt-0 ">
      <div className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="border-0">
              <CardTitle className={`text-muted-foreground text-sm font-medium ${stat.title=="Income" ? "text-green-400" : stat.title=="Expenditure" ? "text-red-400" : "text-blue-400"} `}>{
              stat.title
              }</CardTitle>
         
            </CardHeader>
            <CardContent className="space-y-2.5">
              <div className="flex items-center gap-5 justify-evenly">
                <span className="text-2xl font-medium align-middle text-foreground tracking-tight">
                  {stat.format ? stat.format(stat.value) : stat.prefix + formatNumber(stat.value) + stat.suffix}
                </span>
                <Badge variant={stat.positive ? 'success' : 'destructive'} appearance="light">
                  {stat.delta > 0 ? <ArrowUp /> : <ArrowDown />}
                  {stat.delta}%
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground mt-2 border-t pt-2.5">
                Vs last month:{' '}
                <span className="font-medium text-foreground">
                  {stat.lastFormat
                    ? stat.lastFormat(stat.lastMonth)
                    : stat.prefix + formatNumber(stat.lastMonth) + stat.suffix}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
