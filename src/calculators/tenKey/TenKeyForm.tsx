
import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Plus, 
  Minus, 
  Divide, 
  Percent, 
  ArrowLeft, 
  X as Multiply, 
  Equal, 
  RotateCcw
} from 'lucide-react';
import { formatNumber, performCalculation } from './tenKeyUtils';

const TenKeyForm: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState<number>(0);
  const [paper, setPaper] = useState<string[]>([]);
  const [clearType, setClearType] = useState<'AC' | 'C'>('AC');
  const displayRef = useRef<HTMLDivElement>(null);
  const paperTapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(parseInt(e.key));
      } else if (e.key === '.') {
        handleDecimalPoint();
      } else if (e.key === '+') {
        handleOperator('+');
      } else if (e.key === '-') {
        handleOperator('-');
      } else if (e.key === '*') {
        handleOperator('×');
      } else if (e.key === '/') {
        handleOperator('÷');
      } else if (e.key === '%') {
        handlePercent();
      } else if (e.key === 'Enter' || e.key === '=') {
        handleEquals();
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, operation, previousValue, waitingForOperand]);

  // Scroll paper tape to bottom when new items added
  useEffect(() => {
    if (paperTapeRef.current) {
      paperTapeRef.current.scrollTop = paperTapeRef.current.scrollHeight;
    }
  }, [paper]);

  const handleDigit = (digit: number) => {
    if (waitingForOperand) {
      setDisplay(digit.toString());
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit.toString() : display + digit.toString());
    }
    setClearType('C');
  };

  const handleDecimalPoint = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
    setClearType('C');
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = performCalculation(previousValue, inputValue, operation);
      setPreviousValue(result);
      setDisplay(formatNumber(result));
      addToPaper(`${formatNumber(previousValue)} ${operation} ${formatNumber(inputValue)} = ${formatNumber(result)}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOperator);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = performCalculation(previousValue, inputValue, operation);
      setDisplay(formatNumber(result));
      addToPaper(`${formatNumber(previousValue)} ${operation} ${formatNumber(inputValue)} = ${formatNumber(result)}`);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    if (clearType === 'C') {
      setDisplay('0');
      setClearType('AC');
    } else {
      setDisplay('0');
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(false);
    }
  };

  const handleBackspace = () => {
    if (!waitingForOperand) {
      if (display.length > 1) {
        setDisplay(display.substring(0, display.length - 1));
      } else {
        setDisplay('0');
      }
    }
  };

  const handlePercent = () => {
    const value = parseFloat(display);
    const percent = value / 100;
    setDisplay(formatNumber(percent));
    setWaitingForOperand(true);
  };

  const handleNegate = () => {
    const value = parseFloat(display);
    setDisplay(formatNumber(-value));
  };

  const handleMemoryAdd = () => {
    setMemory(memory + parseFloat(display));
    setWaitingForOperand(true);
  };

  const handleMemorySubtract = () => {
    setMemory(memory - parseFloat(display));
    setWaitingForOperand(true);
  };

  const handleMemoryRecall = () => {
    setDisplay(formatNumber(memory));
    setWaitingForOperand(false);
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const clearPaper = () => {
    setPaper([]);
  };

  const addToPaper = (entry: string) => {
    setPaper([...paper, entry]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Card className="calculator-container p-4 flex-1 shadow-lg bg-background border-2 border-border">
        <div 
          ref={displayRef}
          className="display bg-muted text-right p-4 text-2xl font-mono mb-4 rounded overflow-x-auto whitespace-nowrap h-16 flex items-center justify-end"
        >
          {display}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* First row */}
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted" 
            onClick={handleMemoryClear}
          >
            MC
          </Button>
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted" 
            onClick={handleMemoryRecall}
          >
            MR
          </Button>
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted" 
            onClick={handleMemorySubtract}
          >
            M-
          </Button>
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted" 
            onClick={handleMemoryAdd}
          >
            M+
          </Button>

          {/* Second row */}
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted"
            onClick={handleClear}
          >
            {clearType}
          </Button>
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted" 
            onClick={handleNegate}
          >
            +/-
          </Button>
          <Button 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted" 
            onClick={handlePercent}
          >
            <Percent size={18} />
          </Button>
          <Button 
            variant="outline" 
            className="bg-primary/20 hover:bg-primary/30 text-primary" 
            onClick={() => handleOperator('÷')}
          >
            <Divide size={18} />
          </Button>

          {/* Third row */}
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(7)}
          >
            7
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(8)}
          >
            8
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(9)}
          >
            9
          </Button>
          <Button 
            variant="outline" 
            className="bg-primary/20 hover:bg-primary/30 text-primary" 
            onClick={() => handleOperator('×')}
          >
            <Multiply size={18} />
          </Button>

          {/* Fourth row */}
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(4)}
          >
            4
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(5)}
          >
            5
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(6)}
          >
            6
          </Button>
          <Button 
            variant="outline" 
            className="bg-primary/20 hover:bg-primary/30 text-primary" 
            onClick={() => handleOperator('-')}
          >
            <Minus size={18} />
          </Button>

          {/* Fifth row */}
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(1)}
          >
            1
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(2)}
          >
            2
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(3)}
          >
            3
          </Button>
          <Button 
            variant="outline" 
            className="bg-primary/20 hover:bg-primary/30 text-primary" 
            onClick={() => handleOperator('+')}
          >
            <Plus size={18} />
          </Button>

          {/* Sixth row */}
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={() => handleDigit(0)}
          >
            0
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={handleDecimalPoint}
          >
            .
          </Button>
          <Button 
            variant="outline" 
            className="hover:bg-primary/10" 
            onClick={handleBackspace}
          >
            <ArrowLeft size={18} />
          </Button>
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90" 
            onClick={handleEquals}
          >
            <Equal size={18} />
          </Button>
        </div>
      </Card>

      <Card className="paper-tape-container flex-1 p-4 bg-background border-2 border-border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Calculator size={18} />
            Paper Tape
          </h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearPaper}
            className="flex items-center gap-1"
          >
            <RotateCcw size={14} />
            Clear
          </Button>
        </div>
        <div 
          ref={paperTapeRef}
          className="paper-tape bg-muted/30 p-3 rounded h-[385px] overflow-y-auto font-mono text-sm"
        >
          {paper.length === 0 ? (
            <div className="text-muted-foreground text-center py-4">
              Calculation history will appear here
            </div>
          ) : (
            paper.map((entry, index) => (
              <div key={index} className="mb-2 pb-2 border-b border-border/50 last:border-0">
                {entry}
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default TenKeyForm;
