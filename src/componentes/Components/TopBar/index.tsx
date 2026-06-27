import { LogoImage, ProfileButton, TopBarBrand, TopBarContainer, TopBarTitle } from "./styles";
import logo from '../../../assets/imagens/logo.png';

type TopBarProps = {
    title: string;
    showLogo?: boolean;
}

export const TopBar = ({ title, showLogo = false }: TopBarProps) => {
    return (
        <TopBarContainer>
            <TopBarBrand>
                {showLogo && (
                    <LogoImage src={logo} alt="Ocorrencias"/>
                )}
                <TopBarTitle>{title}</TopBarTitle>
            </TopBarBrand>

            <ProfileButton type="button" aria-label="Perfil">
                ♙
            </ProfileButton>
        </TopBarContainer>
    )
}
