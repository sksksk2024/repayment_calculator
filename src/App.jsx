import { useState } from "react";
import { calculateLoanPayement } from "./utils/loan";

import Form from "./components/Form";
import EmptyResults from "./components/EmptyResults";
import CompletedResults from "./components/CompletedResults";

function App() {
  const [isMortgageCalculated, setIsMortgageCalculated] = useState(false);
  const [mortgage, setMortgage] = useState({
    monthlyPayment: 0,
    totalRepayement: 0,
  });

  function calculateMortgage(amount, term, rate) {
    setMortgage(calculateLoanPayement(amount, term, rate));
    setIsMortgageCalculated(true);
  }

  function resetValues() {
    setIsMortgageCalculated(false);
  }

  return (
    <main>
      <Form onCalculateMortgage={calculateMortgage} onReset={resetValues} />
      {isMortgageCalculated ? (
        <CompletedResults mortgage={mortgage} />
      ) : (
        <EmptyResults />
      )}
    </main>
  );
}

export default App;