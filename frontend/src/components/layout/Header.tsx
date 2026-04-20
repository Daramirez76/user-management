import { TextTitle } from "../ui/TextTitle";
type HeaderProps = {
    children?: React.ReactNode
}
function Header(props:HeaderProps){
    return(
        <header className="flex justify-around text-4xl">
            <TextTitle TextTitle={"UMP"} />
            {props.children}
        </header>
    );
}

export { Header };