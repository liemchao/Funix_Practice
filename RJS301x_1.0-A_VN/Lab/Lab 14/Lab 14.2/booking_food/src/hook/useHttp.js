import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const parseToJson = useCallback((data) => {
        return JSON.stringify(data);
    }, [])

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                body: requestConfig.body ? parseToJson(requestConfig.body) : null,
                headers: requestConfig.headers ? requestConfig.headers : {}
            })
            if (!response.ok) {
                throw new Error();
            }
            const data = await response.json();
            applyData(data)
        } catch (error) {
            console.log(error);
            applyData(null);
        }

        setIsLoading(false);
    }, [parseToJson])

    return {
        isLoading,
        sendRequest
    }
}
export default useHttp;