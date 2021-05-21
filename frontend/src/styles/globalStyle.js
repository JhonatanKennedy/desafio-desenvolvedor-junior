import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding:0;
    margin:0;
    vertical-align:baseline;
    border:0;
}
html{
    font-size: 62.5%;
}
body{
    background-color: #f3fcfd;
    width: 50vw;
}

@media only screen and ( max-width: 1440px ){
    html{
        font-size: 57%;
    }
}
@media only screen and ( max-width: 1024px ){
    html{
        font-size: 45%;
    }
}
@media only screen and ( max-width: 768px ){
    html{
        font-size: 39%;
    }
}


`;



export default GlobalStyle;