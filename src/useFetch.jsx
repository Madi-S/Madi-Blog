import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:8000/'

const useFetch = endpoint => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(API_URL + endpoint)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Could not fetch data from ${endpoint}`)
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                })
                .then(() => {
                    setIsPending(false)
                })
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint])

    return [data, isPending, error]
}

export default useFetch
