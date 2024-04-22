import Table from "./components/table/Table";

const App = () => {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Net Income Table</h1>
      <Table netIncomes={netIncomes} />
      <p>Average net income: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;
