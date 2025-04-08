
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const MatrixOperationsGuide: React.FC = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Understanding Matrix Operations & RREF
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p>
          The Row Reduced Echelon Form (RREF) is a standardized form of a matrix that makes 
          it easier to analyze and understand the properties of the matrix and the linear 
          system it represents. This guide explains the key concepts and operations involved 
          in computing RREF.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Elementary Row Operations</h3>
        <p>
          Three types of operations can be performed on the rows of a matrix without changing 
          the solution space of the corresponding system of equations:
        </p>
        
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>
            <strong>Row Swap:</strong> Interchange two rows.
            <div className="bg-muted/30 p-2 rounded my-1 text-sm">
              Example: Swapping R1 and R2 transforms [1, 2; 3, 4] into [3, 4; 1, 2]
            </div>
          </li>
          <li>
            <strong>Row Scaling:</strong> Multiply all elements in a row by a non-zero constant.
            <div className="bg-muted/30 p-2 rounded my-1 text-sm">
              Example: Multiplying R1 by 2 transforms [1, 2; 3, 4] into [2, 4; 3, 4]
            </div>
          </li>
          <li>
            <strong>Row Addition:</strong> Add a multiple of one row to another row.
            <div className="bg-muted/30 p-2 rounded my-1 text-sm">
              Example: Adding R1 to R2 transforms [1, 2; 3, 4] into [1, 2; 4, 6]
            </div>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-6">What is Row Echelon Form (REF)?</h3>
        <p>
          A matrix is in Row Echelon Form when:
        </p>
        <ul className="list-disc space-y-1 pl-5 mt-2">
          <li>All rows consisting entirely of zeros are at the bottom.</li>
          <li>The leading entry (first non-zero number) of each non-zero row is to the right of the leading entry of the row above it.</li>
          <li>The leading entry of each non-zero row is 1 (though this is sometimes excluded from the definition).</li>
        </ul>
        
        <div className="flex justify-center my-4">
          <table className="border-collapse">
            <tbody>
              <tr>
                <td className="border px-3 py-1 font-bold">1</td>
                <td className="border px-3 py-1">2</td>
                <td className="border px-3 py-1">3</td>
                <td className="border px-3 py-1">4</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1 font-bold">1</td>
                <td className="border px-3 py-1">2</td>
                <td className="border px-3 py-1">3</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1 font-bold">1</td>
                <td className="border px-3 py-1">2</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-center text-muted-foreground">Example of a matrix in Row Echelon Form</p>
        
        <h3 className="text-lg font-medium mt-6">What is Row Reduced Echelon Form (RREF)?</h3>
        <p>
          A matrix is in Row Reduced Echelon Form when it is in Row Echelon Form and:
        </p>
        <ul className="list-disc space-y-1 pl-5 mt-2">
          <li>The leading entry in each non-zero row is 1.</li>
          <li>The leading 1 in each non-zero row is the only non-zero entry in its column.</li>
        </ul>
        
        <div className="flex justify-center my-4">
          <table className="border-collapse">
            <tbody>
              <tr>
                <td className="border px-3 py-1 font-bold">1</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">a</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1 font-bold">1</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">b</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1 font-bold">1</td>
                <td className="border px-3 py-1">c</td>
              </tr>
              <tr>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
                <td className="border px-3 py-1">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-center text-muted-foreground">Example of a matrix in Row Reduced Echelon Form</p>
        
        <h3 className="text-lg font-medium mt-6">Important Properties of RREF</h3>
        
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>
            <strong>Uniqueness:</strong> Every matrix has a unique RREF, regardless of the sequence of elementary row operations used.
          </li>
          <li>
            <strong>Rank:</strong> The rank of a matrix equals the number of non-zero rows in its RREF.
          </li>
          <li>
            <strong>Nullity:</strong> For an m×n matrix A, the nullity (dimension of null space) equals n - rank(A).
          </li>
          <li>
            <strong>Solution Space:</strong> RREF makes it easy to identify the solution space of a system of linear equations:
            <ul className="list-disc pl-5 mt-1">
              <li>Unique solution: When there's a pivot in every column except possibly the last column of an augmented matrix.</li>
              <li>No solution: When there's a row [0, 0, ..., 0, k] where k≠0 in the RREF of an augmented matrix.</li>
              <li>Infinite solutions: When there are fewer pivots than variables, creating free variables.</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-6">Matrix Rank and Its Importance</h3>
        
        <p>
          The rank of a matrix is the maximum number of linearly independent rows (or columns). 
          In RREF, this equals the number of non-zero rows. Understanding rank helps determine:
        </p>
        
        <ul className="list-disc space-y-1 pl-5 mt-2">
          <li>Whether a system has a solution (consistency)</li>
          <li>How many solutions exist (uniqueness)</li>
          <li>The dimension of the solution space</li>
          <li>Whether a set of vectors is linearly independent</li>
          <li>If a matrix is invertible (when rank equals number of rows/columns in a square matrix)</li>
        </ul>
        
        <p className="mt-4">
          The RREF calculator automatically computes both the RREF and analyzes the solution 
          characteristics for systems of linear equations, making it easier to understand the 
          underlying mathematical structure.
        </p>
      </CardContent>
    </Card>
  );
};

export default MatrixOperationsGuide;
