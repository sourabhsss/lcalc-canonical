import { useState } from 'react';
import { Calculator, X, Plus, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StockEntry {
  id: string;
  shares: number;
  price: number;
  date?: string;
}

interface StockAverageResult {
  averagePrice: number;
  totalShares: number;
  totalInvestment: number;
  profitLoss: number | undefined;
  profitLossPercentage: number | undefined;
}

const StockAverage = () => {
  const [entries, setEntries] = useState<StockEntry[]>([
    { id: '1', shares: 0, price: 0, date: '' },
    { id: '2', shares: 0, price: 0, date: '' },
  ]);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [showDateInputs, setShowDateInputs] = useState<boolean>(false);
  const [result, setResult] = useState<StockAverageResult | null>(null);
  const [activeTab, setActiveTab] = useState<string>("calculator");
  const { toast } = useToast();

  const handleSharesChange = (id: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, shares: numValue } : entry
    ));
  };

  const handlePriceChange = (id: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, price: numValue } : entry
    ));
  };

  const handleDateChange = (id: string, value: string) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, date: value } : entry
    ));
  };

  const handleCurrentPriceChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    setCurrentPrice(numValue);
  };

  const addEntry = () => {
    const newId = (Math.max(...entries.map(e => parseInt(e.id))) + 1).toString();
    setEntries([...entries, { id: newId, shares: 0, price: 0, date: '' }]);
  };

  const removeEntry = (id: string) => {
    if (entries.length <= 2) {
      toast({
        title: "Cannot remove entry",
        description: "You need at least two entries to calculate an average.",
        variant: "destructive"
      });
      return;
    }
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const calculateAverage = () => {
    // Validate inputs
    const invalidEntries = entries.filter(entry => entry.shares <= 0 || entry.price <= 0);
    if (invalidEntries.length > 0) {
      toast({
        title: "Invalid input",
        description: "All shares and prices must be greater than zero.",
        variant: "destructive"
      });
      return;
    }

    const totalShares = entries.reduce((sum, entry) => sum + entry.shares, 0);
    if (totalShares === 0) {
      toast({
        title: "Cannot calculate",
        description: "Total number of shares cannot be zero.",
        variant: "destructive"
      });
      return;
    }

    let weightedSum = 0;
    let totalCost = 0;

    entries.forEach(entry => {
      weightedSum += entry.shares * entry.price;
      totalCost += entry.shares * entry.price;
    });

    const average = weightedSum / totalShares;
    
    // Calculate profit/loss if current price is provided
    let profitLoss = 0;
    let profitLossPercentage = 0;
    
    if (currentPrice > 0) {
      profitLoss = (currentPrice - average) * totalShares;
      profitLossPercentage = ((currentPrice - average) / average) * 100;
    }

    const newResult: StockAverageResult = {
      averagePrice: average,
      totalShares: totalShares,
      totalInvestment: totalCost,
      profitLoss: currentPrice > 0 ? profitLoss : undefined,
      profitLossPercentage: currentPrice > 0 ? profitLossPercentage : undefined
    };
    
    setResult(newResult);

    toast({
      title: "Calculation complete",
      description: `Your average cost per share is $${average.toFixed(2)}`,
    });
  };

  const resetCalculator = () => {
    setEntries([
      { id: '1', shares: 0, price: 0, date: '' },
      { id: '2', shares: 0, price: 0, date: '' },
    ]);
    setCurrentPrice(0);
    setResult(null);
    setShowDateInputs(false);
  };

  const toggleDateInputs = () => {
    setShowDateInputs(!showDateInputs);
  };

  return (
    <Tabs defaultValue="calculator" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
        <TabsTrigger value="table">History Table</TabsTrigger>
      </TabsList>
      
      <TabsContent value="calculator" className="space-y-6">
        <Card className="p-6 shadow-lg bg-white">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="mr-2 text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Stock Average Calculator</h2>
          </div>

          <div className="space-y-6">
            <div className="flex justify-end mb-4">
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={toggleDateInputs}
                className="text-xs"
              >
                {showDateInputs ? "Hide Dates" : "Show Dates"}
              </Button>
            </div>
            
            <div className={`grid grid-cols-12 gap-4 font-medium text-muted-foreground`}>
              <div className="col-span-1"></div>
              <div className="col-span-4 sm:col-span-3">Number of Shares</div>
              <div className="col-span-4 sm:col-span-3">Price per Share ($)</div>
              {showDateInputs && <div className="col-span-3 sm:col-span-3">Date (Optional)</div>}
              <div className="col-span-1"></div>
            </div>
            
            {entries.map((entry, index) => (
              <div key={entry.id} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 flex justify-center">
                  <div className="flex items-center justify-center bg-primary/10 rounded-full w-8 h-8 text-primary font-medium">
                    {index + 1}
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-3">
                  <Input
                    type="number"
                    min="0"
                    step="1"
                    value={entry.shares || ''}
                    onChange={(e) => handleSharesChange(entry.id, e.target.value)}
                    className="w-full"
                    placeholder="Shares"
                  />
                </div>
                <div className="col-span-4 sm:col-span-3">
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={entry.price || ''}
                    onChange={(e) => handlePriceChange(entry.id, e.target.value)}
                    className="w-full"
                    placeholder="Price"
                  />
                </div>
                {showDateInputs && (
                  <div className="col-span-3 sm:col-span-3">
                    <Input
                      type="date"
                      value={entry.date || ''}
                      onChange={(e) => handleDateChange(entry.id, e.target.value)}
                      className="w-full"
                    />
                  </div>
                )}
                <div className="col-span-1 flex justify-center">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="rounded-full h-8 w-8 p-0"
                    onClick={() => removeEntry(entry.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                onClick={addEntry}
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" /> Add Another Purchase
              </Button>
            </div>
            
            <div className="border-t border-border pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="currentPrice" className="block text-sm font-medium text-muted-foreground mb-1">
                    Current Stock Price (Optional)
                  </label>
                  <Input
                    id="currentPrice"
                    type="number"
                    min="0"
                    step="0.01"
                    value={currentPrice || ''}
                    onChange={(e) => handleCurrentPriceChange(e.target.value)}
                    placeholder="Enter current market price"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter to calculate profit/loss
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button onClick={calculateAverage} className="px-8 flex items-center gap-2">
                  Calculate <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={resetCalculator} className="px-8 flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" /> Reset
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {result !== null && (
          <Card className="mt-8 p-6 bg-primary/5 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="text-muted-foreground mb-2">Average Price</p>
                <p className="text-2xl font-bold text-primary">${result.averagePrice.toFixed(2)}</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="text-muted-foreground mb-2">Total Shares</p>
                <p className="text-2xl font-bold">{result.totalShares.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="text-muted-foreground mb-2">Total Investment</p>
                <p className="text-2xl font-bold">${result.totalInvestment.toFixed(2)}</p>
              </div>
            </div>
            
            {result.profitLoss !== undefined && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className={`p-4 bg-white rounded-lg shadow ${result.profitLoss >= 0 ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
                  <p className="text-muted-foreground mb-2">Profit/Loss</p>
                  <p className={`text-2xl font-bold ${result.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {result.profitLoss >= 0 ? '+' : ''}${result.profitLoss.toFixed(2)}
                  </p>
                </div>
                <div className={`p-4 bg-white rounded-lg shadow ${result.profitLossPercentage !== undefined && result.profitLossPercentage >= 0 ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
                  <p className="text-muted-foreground mb-2">Profit/Loss Percentage</p>
                  <p className={`text-2xl font-bold ${result.profitLossPercentage !== undefined && result.profitLossPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {result.profitLossPercentage !== undefined 
                      ? (result.profitLossPercentage >= 0 ? '+' : '') + result.profitLossPercentage.toFixed(2) + '%' 
                      : '0.00%'}
                  </p>
                </div>
              </div>
            )}
          </Card>
        )}
      </TabsContent>
      
      <TabsContent value="table">
        <Card className="p-6 shadow-lg bg-white">
          <h3 className="text-xl font-bold mb-4">Purchase History</h3>
          
          {entries.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Price per Share</TableHead>
                    {showDateInputs && <TableHead>Date</TableHead>}
                    <TableHead>Total Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entries.map((entry, index) => (
                    <TableRow key={entry.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{entry.shares.toLocaleString()}</TableCell>
                      <TableCell>${entry.price.toFixed(2)}</TableCell>
                      {showDateInputs && <TableCell>{entry.date || 'N/A'}</TableCell>}
                      <TableCell>${(entry.shares * entry.price).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No entries yet. Add some stock purchases to see them here.</p>
          )}
          
          {result && (
            <div className="mt-6 p-4 border border-border rounded-lg bg-muted/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Average Price:</p>
                  <p className="font-semibold">${result.averagePrice.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Shares:</p>
                  <p className="font-semibold">{result.totalShares.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Investment:</p>
                  <p className="font-semibold">${result.totalInvestment.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default StockAverage;
