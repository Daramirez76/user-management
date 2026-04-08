type TextContentProps = {
    ContentText: string;
};

function TextContent(props: TextContentProps){
    return(
        <p>
            {props.ContentText}
        </p>
    );
}

export { TextContent };