import React from 'react';

import { Input, Button } from '../Styled/SearchFormStyle';

function SearchForm(props) {
  const [value, setValue] = React.useState('');

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const submitValue = (event) => {
    event.preventDefault();
    if (value === '') {
      alert('Please enter name');
    } else {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={changeValue}
          autoComplete="off"
        />

        <Button onClick={event => { submitValue(event) }}>
          {props.buttonText}
        </Button>
      </form>
    </div>
  )
}

export default SearchForm;
