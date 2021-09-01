import React, { useEffect } from "react"

const NotFoundPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://to.fwg.vn'
        );
    }, []);

    return (<p></p>)
}

export default NotFoundPage;
