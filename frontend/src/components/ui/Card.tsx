type CardProps = {
    children: React.ReactNode
};

function Card(props:CardProps){
    return(
        <>
            {props.children}
        </>
    );
}

export { Card };