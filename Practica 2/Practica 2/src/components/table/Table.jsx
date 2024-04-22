import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((x, item) => x + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Net Income</th>
      </tr>

      {netIncomes.map((item, index) => (
        <tr key={index}>
          <td>{item.brand}</td>
          <td>{item.income}</td>
        </tr>
      ))}

      <p>Average net income: {averageIncome.toFixed(2)}</p>
    </table>
  );
};

export default Table;

Table.propTypes = {
  netIncomes: PropTypes.arrayOf,
};
