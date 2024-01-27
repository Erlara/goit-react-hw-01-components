export const Customers = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* {items.map(({ id, type, amount, currency }) => (
        <Tbody key={id}>
          <TLine>
            <TColumn>{type}</TColumn>
            <TColumn>{amount}</TColumn>
            <TColumn>{currency}</TColumn>
          </TLine>
        </Tbody>
      ))} */}
      </table>
    </div>
  );
};
