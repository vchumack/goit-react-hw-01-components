import PropTypes from 'prop-types';
import { Table, ThTable, TrTable, TdTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  console.log(transactions);
  return (
    <Table>
      <thead>
        <tr>
          <ThTable>Type</ThTable>
          <ThTable>Amount</ThTable>
          <ThTable>Currency</ThTable>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }, index) => {
          return (
            <TrTable key={id} index={index}>
              <TdTable>{type}</TdTable>
              <TdTable>{amount}</TdTable>
              <TdTable>{currency}</TdTable>
            </TrTable>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
