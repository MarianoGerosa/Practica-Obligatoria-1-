import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Net Income</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  netIncomes: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      income: PropTypes.number,
    })
  )
};
