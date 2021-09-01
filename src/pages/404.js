import React, { useEffect } from "react"

const NotFoundPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://fwg.vn'
        );
    }, []);

    return (<p></p>)
}

export default NotFoundPage;
