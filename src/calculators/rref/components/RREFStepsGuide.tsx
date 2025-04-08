
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListOrdered } from 'lucide-react';

const RREFStepsGuide: React.FC = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ListOrdered className="h-5 w-5" />
          Step-by-Step RREF Calculation Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p>
          To compute the Row Reduced Echelon Form (RREF) of a matrix, follow these systematic steps
          known as Gaussian elimination with back-substitution:
        </p>
        
        <h3 className="text-lg font-medium mt-4">Steps to Compute RREF</h3>
        
        <ol className="list-decimal space-y-3 pl-5 mt-2">
          <li>
            <strong>Start with the leftmost column</strong> and find the first non-zero entry.
            This will be your pivot.
          </li>
          <li>
            <strong>Swap rows if necessary</strong> to bring the pivot to the top row being processed.
          </li>
          <li>
            <strong>Scale the pivot row</strong> to make the pivot entry equal to 1 (divide the entire row by the pivot value).
          </li>
          <li>
            <strong>Eliminate all other entries in the pivot column</strong> by subtracting appropriate multiples
            of the pivot row from other rows.
          </li>
          <li>
            <strong>Cover the current pivot row and column</strong> and repeat steps 1-4 on the submatrix
            until all rows are processed.
          </li>
          <li>
            <strong>Starting from the bottom right, work upward</strong> (back-substitution) to ensure that
            each leading 1 is the only non-zero entry in its column.
          </li>
        </ol>
        
        <h3 className="text-lg font-medium mt-6">Example Calculation</h3>
        
        <p>Let's work through a simple example with the matrix:</p>
        
        <div className="flex justify-center my-4">
          <table className="border-collapse">
            <tbody>
              <tr>
                <td className="border px-3 py-1">1</td>
                <td className="border px-3 py-1">2</td>
                <td className="border px-3 py-1">3</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">4</td>
                <td className="border px-3 py-1">5</td>
                <td className="border px-3 py-1">6</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">7</td>
                <td className="border px-3 py-1">8</td>
                <td className="border px-3 py-1">9</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <ol className="list-decimal space-y-4 pl-5">
          <li>
            <p><strong>First pivot (R1, C1):</strong> The entry is 1, which is already a good pivot.</p>
            <p>Scale: R1 is already scaled (1 in pivot position).</p>
            <p>Eliminate: Subtract 4×R1 from R2 and 7×R1 from R3:</p>
            <div className="flex justify-center my-2">
              <table className="border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-3 py-1">1</td>
                    <td className="border px-3 py-1">2</td>
                    <td className="border px-3 py-1">3</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">-3</td>
                    <td className="border px-3 py-1">-6</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">-6</td>
                    <td className="border px-3 py-1">-12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          
          <li>
            <p><strong>Second pivot (R2, C2):</strong> The entry is -3.</p>
            <p>Scale: Divide R2 by -3 to get a 1 in the pivot position:</p>
            <div className="flex justify-center my-2">
              <table className="border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-3 py-1">1</td>
                    <td className="border px-3 py-1">2</td>
                    <td className="border px-3 py-1">3</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">1</td>
                    <td className="border px-3 py-1">2</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">-6</td>
                    <td className="border px-3 py-1">-12</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Eliminate: Subtract 2×R2 from R1 and add 6×R2 to R3:</p>
            <div className="flex justify-center my-2">
              <table className="border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-3 py-1">1</td>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">-1</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">1</td>
                    <td className="border px-3 py-1">2</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">0</td>
                    <td className="border px-3 py-1">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          
          <li>
            <p><strong>Third pivot (R3, C3):</strong> All entries in R3 are zero, so we're done.</p>
          </li>
        </ol>
        
        <p className="font-medium mt-4">Final RREF:</p>
        
        <div className="flex justify-center my-2">
          <table className="border-collapse">
            <tbody>
              <tr>
                <td className="border px-3 py-1">1</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">-1</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">1</td>
                <td className="border px-3 py-1">2</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4">
          This final matrix indicates that the original matrix has a rank of 2 and is not full rank. 
          If this were an augmented matrix representing a system of linear equations, it would have 
          infinitely many solutions with one free variable.
        </p>
      </CardContent>
    </Card>
  );
};

export default RREFStepsGuide;
