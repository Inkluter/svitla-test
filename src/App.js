import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import CandidatesTable from './components/CandidatesTable'

function App({ candidates }) {

  return (
    <div className="app">
      <CandidatesTable
        candidates={candidates}
      />
    </div>
  );
}

export default connect(
  state => ({ candidates: state.CANDIDATES}),
)(App);
