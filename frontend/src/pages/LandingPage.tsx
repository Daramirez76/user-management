import { Header } from "../components/layout/Header";
import { TextContent } from "../components/ui/TextContent";
import { Card } from "../components/ui/Card";
import { Footer } from "../components/layout/Footer";
import { TextTitle } from "../components/ui/TextTitle";
import { Link } from "react-router-dom";
import { NavBar } from "../components/layout/NavBar";

function LandingPage(){
    return(
        <>
            <Header>
                <NavBar />
                <Link to={"/Register"}>Register</Link>
                <Link to={"/Login"}>Login</Link>
            </Header>
            <Card>
                <TextTitle TextTitle="User Managment"/>
            </Card>
            <Card>
                <TextContent ContentText="This website has of objective manage the users of this website"/>
            </Card>
            <Card>
                <TextTitle TextTitle="Characteristics" tag={"h2"}/>
            </Card>
            <Card>
                <TextContent ContentText="the administrator has create users, read information of users, update information of users and delete information of users"/>
            </Card>
            <Footer />
        </>
    );
}

export { LandingPage };