import React, { useState } from 'react'
import Button from '@mui/material/Button'

function Character({ character }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            {character.name}
            {showMore && <div>{character.details}</div>}
            <Button variant="contained" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</Button>
        </div>
    )
}

export default Character