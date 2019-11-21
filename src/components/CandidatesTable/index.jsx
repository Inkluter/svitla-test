import React from 'react'
import { connect } from 'react-redux'
import CandidateItem from './CandidateItem'
import { STATUS_CHANGE } from '../../constants'
import useCandidatesTable from './useCandidatesTable'

function CandidatesTable({ candidates = [], handleStatusChange }) {
    const {
        searchInput,
        handleSearchInput,
        onReset,
        filteredCandidates,
    } = useCandidatesTable({candidates})

    return (
        <div className="users-table">
            <div className="table-controls">
                <input
                    value={searchInput}
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchInput}
                />

                <button 
                    className="reset"
                    onClick={onReset}
                >
                    Reset
                </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Role:</th>
                  <th>Connected on:</th>
                  <th>Status:</th>
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map(candidate => (
                  <CandidateItem 
                    key={candidate.id}
                    candidate={candidate}
                    handleStatusChange={handleStatusChange}
                  />
                ))}
              </tbody>
            </table>
          </div>
      );
}

export default connect(
    null,
    (dispatch) => ({
        handleStatusChange: (newStatus, id) => {
            dispatch({ 
                type: STATUS_CHANGE,  
                payload: { newStatus, id },
            })
        }
    }),
)(CandidatesTable);
