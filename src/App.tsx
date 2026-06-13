import { useState, type SyntheticEvent } from 'react'
import './App.css'


function App() {

    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

    function sideBarAbre() { 
        setSideBarOpen ((prevState) => !prevState)
    }

    return(
        <main>
            <div className='topbar'>
                <button onClick={sideBarAbre}>Menu</button>
            </div>
            <div className={sideBarOpen ? "sidebar abre" : "sidebar fecha"}>
                <div>Novas Ocorrencias</div>
            </div>
        </main>
        
        
    )
}

export default App