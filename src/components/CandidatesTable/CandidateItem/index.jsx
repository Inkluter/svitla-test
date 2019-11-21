import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { STATUSES } from '../../../constants'

function CandidateItem({ candidate, handleStatusChange }) {
  return (
    <tr>
        <td>{candidate.name}</td>
        <td>{candidate.role}</td>
        <td>{candidate.connectedOn}</td>
        <td>
            <Dropdown 
              options={STATUSES}
              value={candidate.status}
              onChange={(option) => handleStatusChange(option.value, candidate.id)}
            />
        </td>
    </tr>
  );
}

export default CandidateItem;
