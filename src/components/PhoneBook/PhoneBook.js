import React from 'react';
import css from './PhoneBook.module.css';
class FormHandler extends React.Component {
  state = {
   name: '',
   number: ''
  };

onChangeHandler = event => {
  const {name, value} = event.currentTarget
  this.setState({[name]: value})
}
handlerSumbit = e => {
  e.preventDefault()
  console.log(this.state)
}

  render() {
    return (
      <form onChange={this.handlerSumbit} className={css.form}>
        <ul className={css.list}>
          <li className={css.item}>
            <label>
              Name
              <input  onChange={this.onChangeHandler} name='name' type="text"></input>
            </label>
          </li>
          <li className={css.item}> 
            <label>
              Number
              <input  name='number' onChange={this.onChangeHandler} type="text"></input>
            </label>
          </li>
        </ul>
        <button className={css.btn} type="submit">Add to Contacts</button>
      </form>
    );
  }
}

export default FormHandler;
