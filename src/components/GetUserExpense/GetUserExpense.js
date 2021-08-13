import React, { useState } from 'react';
import './GetUserExpense.css';
import FormExpense from './FormExpense';

const GetUserExpense = (props) => {
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toFixed(2).toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
      {isEditing && <FormExpense onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={cancelEditingHandler} />}
    </div>
  );
};

export default GetUserExpense;
