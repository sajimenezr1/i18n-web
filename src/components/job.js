import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';


const Job = (props) => {

  const renderFormat = () => {
    const salary = props.offer.salary;
    if (salary > 1) return (<FormattedMessage id="Millions"/>)
    else return (<FormattedMessage id="Million"/>)
  }
  
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {renderFormat()}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td> <FormattedNumber value={props.offer.views} /></td>
    </tr>
  );
};

export default Job;
