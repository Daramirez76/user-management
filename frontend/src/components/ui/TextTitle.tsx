type TextTitleProps = {
    TextTitle:string
};

function TextTitle(props: TextTitleProps){
    return(
        <h1>
            {props.TextTitle}
        </h1>
    );
}

export { TextTitle };