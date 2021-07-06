import axios from 'axios'
import React from 'react'

const RequestForm = () => {
    const [response, setResponse] = React.useState(null)
    const [url, setUrl] = React.useState('')
    const [hasError, setHasError] = React.useState(false)

    const handleSubmit = () => {
        if (!!url) {
            axios.get(url).then(response => {
                setHasError(false)
                setResponse(response)
                console.log(response)
            }).catch(error => {
                setHasError(true)
                setResponse(error)
                console.log(error)
            })
        }
    }

    return (
        <div>
            <input type='text' autoComplete onChange={e => setUrl(e.target.value)} placeholder='Paste GET url here' />
            <button onClick={handleSubmit}>Test</button>
            {
                response ?
                    <>
                        <br />
                        <br />
                        <h3 style={{ color: hasError ? 'red' : 'green' }}>{hasError ? 'Error' : 'Response'}:-</h3>
                        <p>{JSON.stringify(response)}</p>
                    </> : null
            }
        </div>
    )
}

export default RequestForm
