import { useEffect } from "react"


function useTitle (title) {
    useEffect(() => {
        document.title = `Todo | ${title}`
    }, [title])
}

export default useTitle