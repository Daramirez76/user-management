import { ElementType } from "react";

type TextTitleProps = {
    TextTitle:string;
    tag?:ElementType;
};

function TextTitle(props: TextTitleProps){
    const tag = props.as ?? "h1";
    return(
        <>  
            <props.tag>
                {props.TextTitle}
            </props.tag>
        </>
    );
}

export { TextTitle };