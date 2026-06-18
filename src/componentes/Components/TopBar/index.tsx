type TopBarProps = {
    sideBarAbre: () => void;
}

export const TopBar = (props: TopBarProps) => {
    return  <div className='topbar'>
                <button onClick={props.sideBarAbre}>Menu</button>
            </div>
}