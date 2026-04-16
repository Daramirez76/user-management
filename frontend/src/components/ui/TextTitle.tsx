import type { ElementType } from "react";

type TextTitleProps = {
    TextTitle:string;
    tag?:ElementType;
};

function TextTitle(props: TextTitleProps){
    const Tag = props.tag ?? "h1";

    return(
        <>  
            <Tag>
                {props.TextTitle}
            </Tag>
        </>
    );
}

export { TextTitle };
