import { MenuButton, TopBarContainer } from './styles';

type TopBarProps = {
    sideBarAbre: () => void;
}

export const TopBar = (props: TopBarProps) => {
    return  <TopBarContainer>
                <MenuButton onClick={props.sideBarAbre}>Menu</MenuButton>
            </TopBarContainer>
}
