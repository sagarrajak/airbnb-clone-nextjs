import React, { useEffect, useState } from 'react'

export interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly = (props: ClientOnlyProps) => {
    const [hasMounted, setHasMounted] = useState<boolean>(false);
    const { children } = props;

    useEffect(() => {
        setHasMounted(true);
    })

    if (!hasMounted) {
        return null;
    }

    return (
        { children }
    )
}

export default ClientOnly