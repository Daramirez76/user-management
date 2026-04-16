import { TextTitle } from "../ui/TextTitle";
import { TextContent } from "../ui/TextContent";

function Footer(){
    return(
        <>
            <TextTitle TextTitle="Footer" tag={"h4"}/>
            <TextContent ContentText="contenido de footer"/>
            <TextTitle TextTitle="Social Links" tag={"h4"}/>
            <TextContent ContentText="redes sociales de ejemplo"/>
            <TextTitle TextTitle="Contact Us" tag={"h4"}/>
            <TextContent ContentText="numero de ejemplo"/>
        </>
    );
}

export { Footer };