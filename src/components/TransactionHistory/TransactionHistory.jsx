import PropTypes from 'prop-types';
import { Table, Header, HeaderLine, HeaderColumn, Tbody, TLine, TColumn } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
    <Table>
  <Header>
    <HeaderLine>
      <HeaderColumn>Type</HeaderColumn>
      <HeaderColumn>Amount</HeaderColumn>
      <HeaderColumn>Currency</HeaderColumn>
    </HeaderLine>
  </Header>
    {items.map(({ id, type, amount, currency })=> (
     <Tbody key= {id}>
    <TLine>
      <TColumn>{type}</TColumn>
      <TColumn>{amount}</TColumn>
      <TColumn>{currency}</TColumn>
    </TLine>
  </Tbody>
 ))}
  
</Table>
)
};

TransactionHistory.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};