import { Header } from "../components/layout/Header";
import { Button } from "../components/ui/Button";
import { TextContent } from "../components/ui/TextContent";
import { Card } from "../components/ui/Card";
import { Footer } from "../components/layout/Footer";
import { TextTitle } from "../components/ui/TextTitle";
import { useNavigate } from "react-router-dom";

function LandingPage(){
    const navigate = useNavigate();

    return(
        <>
            <Header>
                <Button
                    onClick={() => navigate("/register")}
                >
                    <TextContent ContentText="Register"/>
                </Button>
                <Button
                    onClick={() => navigate("/login")}
                >
                    <TextContent ContentText="Login"/>
                </Button>
            </Header>
            <Card>
                <TextTitle TextTitle="User Managment"/>
            </Card>
            <Card>
                <TextContent ContentText="This website has of objective manage the users of this website"/>
            </Card>
            <Card>
                <TextTitle TextTitle="Characteristics"/>
            </Card>
            <Card>
                <TextContent ContentText="the administrator has create users, read information of users, update information of users and delete information of users"/>
            </Card>
            <Footer />
        </>
    );
}

export { LandingPage };