type InputProps = {
    text: string
};
function Input(props: InputProps){
    return(
        <input 
            placeholder={props.text}
        />
    );
}

export { Input };