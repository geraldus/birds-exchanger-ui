import React, { ReactNode } from 'react';


type Props = {
    id: number,
    name: ReactNode,
}

const ContainerName: React.FC<Props> = (props) => {
    return (
        <div>
            CONTAINER #{props.id} "{props.name}"
            <br />
            INSERT YOUR CODE HERE
        </div>
    )
}

export default ContainerName
