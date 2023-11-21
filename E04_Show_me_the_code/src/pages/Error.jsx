import { useRouteError } from "react-router-dom";

export const Error = () => {

    const err = useRouteError();

    return (
        <div>
            <h1>Error</h1>
            <h2>This is an error page</h2>
            <h3>{err.status}, {err.statusText}</h3>
        </div>
    )
};

