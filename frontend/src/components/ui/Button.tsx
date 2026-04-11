import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

function Button(props:ButtonProps){
    return(
        <button type="button" onClick={props.onClick}>
            
            {props.children}
        
        </button>
    );
}

export { Button };