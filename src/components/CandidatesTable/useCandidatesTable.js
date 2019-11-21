import { useState, useMemo, useCallback } from 'react'

export default ({ candidates }) => {
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInput = useCallback(
        (e) => {
            const newValue = e.target.value
    
            setSearchInput(newValue)
        },
        [setSearchInput],
    )

    const onReset = useCallback(
        () => setSearchInput(''),
        [setSearchInput],
    )

    const filterCandidate = useCallback(
        (candidate) => {
            const candidateValues = candidate.name.toLowerCase()
                                + candidate.role.toLowerCase()
                                + candidate.connectedOn.toLowerCase()
                                + candidate.status.toLowerCase()
    
            return candidateValues.includes(searchInput.toLowerCase())
        },
        [searchInput],
    )

    const filteredCandidates = useMemo(
        () => candidates.filter(filterCandidate),
        [candidates, filterCandidate],
    )

    return {
        searchInput,
        handleSearchInput,
        onReset,
        filteredCandidates,
    }
}