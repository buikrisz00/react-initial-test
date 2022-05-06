import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function Subscription({ setSubscription }) {
    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleClick() {
        if (input.match(/(?=.*@)(?=.*\.)/gm)){
            setSubmitted(true);
            setLoading(true);
            fetch("https://demoapi.com/api/series/newsletter", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({email: input})
            })
            .then(res => res.json())
            .then(resJson => {
                if (resJson.done) {
                    setLoading(false);
                    setTimeout(() => {
                        setSubscription(false);
                    }, 5000)
                }
            })
        }
    }

  return (
    <form>
        {
            !submitted && !loading ?
                <>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <Button variant="contained" onClick={handleClick}>Contained</Button>
                </> : submitted && loading ?
                <div>Loading</div> :
                <div>Subscribed</div>

        }
        
    </form>
  )
}

export default Subscription