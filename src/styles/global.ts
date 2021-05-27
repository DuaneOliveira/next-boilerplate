import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width:1880px){
    html{
      font-size:100%;
    }
  }
  @media (max-width:1680px){
    html{
      font-size:93.75%;
    }
  }
  @media (max-width:1280px){
    html{
      font-size:87.5%;
    }
  }
  @media (max-width:1024px){
    html{
      font-size:81.25%
    }
  }
  html{
    transition:font-size 1s cubic-bezier(0, 0.21, 0.49, 0.98);
    font-weight:400;
    font-family:Montserrat, sans-serif;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

  }
  .wrapper{
    height:100vh;
    display:flex;
    flex-direction:column;
  }
  main{
    flex:1
  }
  footer{
    width:100%;
    height:100px;
    background-color:red;
  }
`
