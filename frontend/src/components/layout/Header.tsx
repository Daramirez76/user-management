import { NavBar } from "./NavBar";
import { TextTitle } from "../ui/TextTitle";
import { Button } from "../ui/button";
import { TextContent } from "../ui/TextContent";

function Header(){
    return(
        <>
            <TextTitle TextTitle={"Hello World"} />
            <NavBar />
            <Button>
                <TextContent ContentText="Register"/>
            </Button>
            <Button>
                <TextContent ContentText="Login"/>
            </Button>
        </>
    );
}

export { Header };