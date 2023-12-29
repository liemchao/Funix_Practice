import { useCallback, useState } from "react"

const useHttp = () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const sendRequest = useCallback((requestConfig, callback, showAlert) => {
        setError("")
        setIsLoading(true);
        fetch(requestConfig.link, {
            method: requestConfig.method ? requestConfig.method : "GET",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }).then((response) => {
            const data = response.json();
            return data
        }).then((data) => {
            console.log(data)
            setIsLoading(false)
            if (data.error) {
                const error = JSON.stringify(data);
                throw new Error(error)
            }
            if (callback) {
                callback(data)
            } if (showAlert) {
                showAlert()
            }
        }).catch(error => {
            error = JSON.parse(error.message)
            alert(error.error.message)
            setError(error.error.message)
        })
    }, [])

    return {
        sendRequest,
        error,
        isLoading,
    }
}
export default useHttp