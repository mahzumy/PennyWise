import React from 'react'
import { useState } from 'react'

export const Option = ({trans}) => {
  
  const [selectedValue, setSelectedValue] = useState(""); // Nilai yang dipilih

  const handleSelectChange = (event) => {
    const selectedOptionValue = event.target.value;
    const [type, category] = selectedOptionValue.split(":"); // Memecah nilai menjadi dua
    trans.type=type;
    trans.category=category;
    setSelectedValue(selectedOptionValue); // Memperbarui nilai pada tempilan dipilih
  }

  return (
    <select name='category' value={selectedValue} className='w-full border-2 border-gray-300' onChange={handleSelectChange}>
        <option className='text-gray-400'>Select One</option>
        <optgroup label='Income Category' >
            <option value="income:Salary">Salary</option>
            <option value="income:Comission">Comission</option>
            <option value="income:Others">Others</option>
        </optgroup>

        <optgroup label='Expense Category'>
            <option value="expense:Food">Food</option>
            <option value="expense:Transportation">Transportation</option>
            <option value="expense:Shopping">Shopping</option>
            <option value="expense:Entertainment">Entertainment</option>
            <option value="expense:Housing / Bills">Housing / Bills</option>
            <option value="expense:Investment">Investment</option>
            <option value="expense:Others">Others</option>
        </optgroup>
    </select>
  )
}
