const calculateInterestAccrualPercentage = ({ fromDate, toDate, interestRate, isFinalPayment }) => {
  const dayOffset = isFinalPayment ? 0 : 1;
  return (Helpers.daysBetweenDates(fromDate, toDate) + dayOffset) / 360.0 * interestRate;
}
Object.defineProperty(this, 'calculateInterestAccrualPercentage', { value: calculateInterestAccrualPercentage, enumerable: true });

const calculateInterestAccrual = ({ interestPercentage, outstandingPrincipal }) => {
  return interestPercentage * outstandingPrincipal;
}
Object.defineProperty(this, 'calculateInterestAccrual', { value: calculateInterestAccrual, enumerable: true });
