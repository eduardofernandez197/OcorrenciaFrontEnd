import { useState, type SyntheticEvent } from 'react'
import './App.css'


function App() {

    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
    const [newOcorrencia, setNewOcorrencia] = useState<boolean>(false)

    function sideBarAbre() { 
        setSideBarOpen ((prevState) => !prevState)
    }

    function createOcorrencia() {
        setNewOcorrencia((prevState) => !prevState)
    }

    return(
        <main>
            <div className='topbar'>
                <button onClick={sideBarAbre}>Menu</button>
            </div>
            <div className={sideBarOpen ? "sidebar abre" : "sidebar fecha"}>
                <div>
                    <button onClick={createOcorrencia}>Nova Ocorrência</button>
                </div>
            </div>
            <div className={newOcorrencia ? "newOcorrencia abre" : "newOcorrencia fecha"}>
                <form>
                    <label htmlFor="">Titulo</label>
                    <input name='titulo' type="text" id='titulo' />
                </form>
            </div>
        </main>
        
        
    )
}

export default App