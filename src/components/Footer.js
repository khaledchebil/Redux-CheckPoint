import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
import './App.css';

const Footer = () => (
  <div className=''>
    <span>Show: </span>
 <FilterLink  filter={VisibilityFilters.SHOW_ALL} >All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <p>*click on the task to be completed, red color: completed task </p>
  </div>
);

export default Footer;