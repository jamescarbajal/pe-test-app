import styled from "styled-components";
import HomeHeroImage from '../hero-facebook.jpg';


export const AccountButton = styled.button`
    font-size: 14px;
    font-weight: 700;
    color: rgba( 75, 75, 75, 1);
    height: 30px;
    width: 200px;
    padding: 4px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px gray;
    border-radius: 5px;
    box-shadow: 3px 5px 5px gray;
    background-color: rgba( 180, 180, 255, 0.25);
`;

export const AccountCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 400px;
    width: 100%;
    max-width: 45vw;
    padding: 10px;
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 2px 2px 5px gray;
`;

export const AnnouncementsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: fit-content;
    background-color: lightsteelblue;
    text-align: center;
    border-radius: 5px;
    padding: 3px;
    margin: 0;
`;

export const AccountLink = styled.a`
    text-decoration: none;
    float: right;
    font-size: 14px;
`;

export const Banner = styled.div`
    margin: 20px;
    font-size: 5vmin;
    color: blue;
`;

export const CardButton = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: rgba( 80, 80, 80, 1);
    height: 30px;
    width: fit-content;
    padding: 4px;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 3px 5px 5px lightgray;
    background-color: rgba( 200, 200, 255, 0.2);
`;

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    height: fit-content;
    width: 90vw;
    margin-top: 240px;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-self: flex-end;
    font-weight: 600;
    margin-top: 10px;
    text-align: center;
`;

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    box-shadow: 0px 4px 8px gray;
    border-radius: 10px;
    padding: 10px;
    height: 300px;
    width: 300px;
    margin: 10px;
`;

export const CartButton = styled.button`
    margin-left: 5px;
    margin-right: 5px;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
    font-weight: bold;
    width: 20px;
    height: 25px;
    line-height: 0;
    padding: 0;
    padding-bottom: 4px;
    box-shadow: 2px 2px 2px lightgray;
    background-color: rgba( 200, 200, 255, 0.25);
`;

export const CartCircle = styled.div`
    position: absolute;
    font-size: 15px;
    top: 15px;
    right: 0;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 1px;
    box-sizing: content-box;
`;

export const CartDescription = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
    padding: 0px;
    overflow: hidden;
`;

export const CartDetail = styled.div`
    display: flex;
    width: 50px;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px
`;

export const CartHeader = styled.div`
    position: relative;
    display: flex;
    font-weight: 600;
    font-size: 16px;
    max-width: 350px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export const CartImage = styled.img`
    position: relative;
    width: fit-content;
    max-width: 150px;
    height: auto;
    padding: 5px;
`;

export const CartItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    border-radius: 7px;
`;

export const CartPromptWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
`;

export const CartSummary = styled.div`
    width: 100%;
    max-width: 500px;
    height: fit-content;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid lightblue;
    border-radius: 3px;
    box-shadow: 2px 2px 5px lightblue;
`;

export const CartWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    min-height: fit-content;
`;

export const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-self: flex-start;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const CompanyLogo = styled.h1`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2vmin 3vw;
    font-weight: inherit;
    width: fit-content;
    height: 100%;
    max-width: 650px;
    padding-bottom: 10px;
`;

export const FloatingHeader = styled.h2`
    position: absolute;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 110px;
    margin-bottom: 10px;
    text-align: center;
`;

export const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid black;
    background-image: linear-gradient(176deg, rgba(40, 70, 100, 1), rgba(50, 50, 70, 0.45));
`;

export const HamburgerContainer = styled.div`
    position: absolute;
    top:0;
    left: 0;
    padding: 10px;
    padding-left: 15px;
    height: 100%;
    width: fit-content;
    overflow: hidden;
`;

export const HeroImage = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: url(${HomeHeroImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 70%;
    z-index: -10;
`;

export const HeroSection = styled.div`
    position: relative;
    margin-top: 0;
    width: 100vw;
    height: 100vh;
    background-color: gray;
    z-index: -10;
`;

export const HeroText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    text-align: left;
    transform: translate(-50%, -50%);
    min-width: fit-content;
    max-width: 100vw;
    min-height: fit-content;
    max-height: 100vh;
    font-weight: 600;
    font-size: 16vw;
    line-height: 28vh;
    border: none;
    box-sizing: content-box;
    padding: 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0);
`;

export const HomeContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column;
    z-index: 1;
`;

export const LoginContainer = styled.div`
    position: relative;
    margin-top: 70px;
    margin-bottom: 75px;
    min-height: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: flex-start;
`;

export const MainContainer = styled.div`
    position: relative;
    min-height: 100vh;
    height: fit-content;
    min-width: 100vw;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const MiniHeader = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

export const ModalCloseButton = styled.button`
    font-size: 20px;
    font-weight: 700;
    position: sticky;
    float: right;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding-bottom: 5px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 2px 2px 5px dimgrey;
    background-color: transparent;
    z-index: 1;
`;

export const ModalImage = styled.img`
    position: relative;
    height: auto;
    width: auto;
    max-width: 90%;
    max-height: 550px;
    padding: 15px;
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 500px;
    height: fit-content;
    width: 100%;
    max-height: 90%;
    max-width: 100%;
    text-align: left;
`;

export const ModalWrapperContents = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
`;

export const NavBarContainer = styled.div`
    position: sticky;
    top: 0;
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 0;
    z-index: 1001;
`;

export const NavBarContents = styled.div`
    position: relative;
    padding: 10px;
    height: fit-content;
    max-height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    box-shadow: 5px 1px 8px gray;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
`;

export const ProductImage = styled.img`
    position: relative;
    height: auto;
    max-height: 150px;
    width: auto;
    max-width: 150px;
`;

export const StyledButton = styled.button`
    font-size: 14px;
    font-weight: 700;
    color: rgba( 75, 75, 75, 1);
    height: 30px;
    width: 200px;
    padding: 4px;
    margin-left: auto;
    margin-right: auto;
    border: 1px gray;
    border-radius: 5px;
    box-shadow: 3px 5px 5px gray;
    background-color: rgba( 200, 200, 255, 0.25);
`;

export const StyledInput = styled.input`
    min-width: 300px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    font-weight: 600;
`;

export const StyledLink = styled.button`
    width: 60px;
    height: 40px;
    background-color: transparent;
    border: none;
    padding: 0;
    box-sizing: content-box;
`;

