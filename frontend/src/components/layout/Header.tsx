import { NavBar } from "./NavBar";
import { TextTitle } from "../ui/TextTitle";
type HeaderProps = {
    children: React.ReactNode
}
function Header(props:HeaderProps){
    return(
        <>
            <TextTitle TextTitle={"Hello World"} />
            <NavBar />
            {props.children}
        </>
    );
}

export { Header };