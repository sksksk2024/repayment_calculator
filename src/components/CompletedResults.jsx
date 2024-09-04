export default function CompletedResults({ mortgage }) {
  return (
    <article className="results completed">
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="total">
        <div className="monthly-total">
          <p>Your monthly repayments </p>
          <h1 className="monthly-amount">
            &pound;
            {mortgage.monthlyPayment
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
        <div className="grand-total">
          <p>Total you'll repay over the term</p>
          <h3 className="grand-total-amount">
            &pound;
            {mortgage.totalRepayement
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h3>
        </div>
      </div>
    </article>
  );
}