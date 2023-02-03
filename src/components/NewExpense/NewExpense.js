import React, { useState } from "react";
import { motion } from "framer-motion";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <motion.button whileTap={{ scale: 0.95 }} onClick={startEditingHandler}>
          {!isEditing && "Add New Expense "}
        </motion.button>
      )}
      <motion.div animate={isEditing ? show : hide}>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      </motion.div>

      {/* {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />} */}
    </div>
    //   <div className="example">
    //   <motion.div className="box" animate={isVisible ? show : hide} />
    // <div className="controls">
    //   <motion.button
    //     whileTap={{ scale: 0.95 }}
    //     onClick={() => setIsVisible(!isVisible)}
    //   >
    //     {isVisible ? "Hide" : "Show"}
    //   </motion.button>
    //   </div>
    // </div>
  );
};

export default NewExpense;
