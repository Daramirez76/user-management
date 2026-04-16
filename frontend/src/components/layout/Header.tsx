import { TextTitle } from "../ui/TextTitle";
type HeaderProps = {
    children?: React.ReactNode
}
function Header(props:HeaderProps){
    return(
        <>
            <TextTitle TextTitle={"UMP"} />
            {props.children}
        </>
    );
}

export { Header };