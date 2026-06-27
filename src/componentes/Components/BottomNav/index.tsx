import { BottomNavContainer, BottomNavItem } from "./style";

export const BottomNav = () => {
    return (
        <BottomNavContainer aria-label="Navegação principal">
            <BottomNavItem type="button" $active>
                <span className="icon">⌂</span>
                <span>Início</span>
            </BottomNavItem>

            <BottomNavItem type="button" $primary>
                <span className="icon">+</span>
                <span>Novo</span>
            </BottomNavItem>

            <BottomNavItem type="button">
                <span className="icon">□</span>
                <span>Relatórios</span>
            </BottomNavItem>
        </BottomNavContainer>
    )
}
