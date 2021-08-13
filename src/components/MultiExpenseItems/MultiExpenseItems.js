import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../GetUserExpense/ExpensesChart';
import Card from '../UI/Card';
import './MultiExpenseItems.css';

function MultiExpenseItems(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearExpenses = props.items.filter((expense) => {
    return expense.date.toString().includes(filteredYear);
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onSelectedYear={selectedYearHandler} />
        <ExpensesChart expenses={filteredYearExpenses} />
        <ExpensesList items={filteredYearExpenses} />
      </Card>
    </div>
  );
}

export default MultiExpenseItems;
