import React, { useEffect } from "react"

const IndexPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://to.fwg.vn'
        );
    }, []);

    return (<p></p>)
}

export default IndexPage;
