type SideBarProps = {
    sideBarOpen: boolean;
    createOcorrencia: () => void;
}

export const SideBar = (props: SideBarProps) => {
    return  <div className={props.sideBarOpen ? "sidebar abre" : "sidebar fecha"}>
                <div>
                    <button onClick={props.createOcorrencia}>Nova Ocorrência</button>
                </div>
            </div>
}
