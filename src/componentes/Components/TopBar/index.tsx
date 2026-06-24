import { LogoImage, TopBarContainer, TopBarTitle, } from "./styles";
import logo from '../../../assets/imagens/logo.png';


type TopBarProps = {
    title: string;
    showLogo?: boolean;
}

export const TopBar = ({ title, showLogo = false }: TopBarProps) => {
    return (
        <TopBarContainer>
            {showLogo && (
                <LogoImage src={logo} alt="Ocorrencias"/>
            )}
            <TopBarTitle>{title}</TopBarTitle>
        </TopBarContainer>
    )
}
