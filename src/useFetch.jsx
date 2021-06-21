import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:8000/'
const ABORT_ERROR = 'AbortError'

const useFetch = endpoint => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            fetch(API_URL + endpoint, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Could not fetch data from ${endpoint}`)
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setError(null)
                    setIsPending(false)
                })
                .catch(err => {
                    if (err.name === ABORT_ERROR) {
                        console.log('Fetch Aborted')
                    } else {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 1000)

        return () => abortCont.abort()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint])

    return [data, isPending, error]
}

export default useFetch
