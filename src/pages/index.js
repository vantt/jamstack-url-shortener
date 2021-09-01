import React, { useEffect } from "react"

const IndexPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://fwg.vn'
        );
    }, []);

    return (<p></p>)
}

export default IndexPage;
