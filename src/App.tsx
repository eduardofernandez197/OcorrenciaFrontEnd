import { useState } from 'react'
import { useForm } from "react-hook-form";
// import type { SubmitHandler } from 'react-hook-form';
import './App.css'
import axios from 'axios';
import { TopBar } from './componentes/Components/TopBar';
import { SideBar } from './componentes/Components/SideBar';
import { FormularioOcorrencia } from './componentes/Components/FormularioOcorrencia';
import type { FormValues } from './Types/types';


function App() {

    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
    const [newOcorrencia, setNewOcorrencia] = useState<boolean>(false)
    const {register, handleSubmit} = useForm<FormValues>()

    function sideBarAbre() { 
        setSideBarOpen ((prevState) => !prevState)
    }

    function createOcorrencia() {
        setNewOcorrencia((prevState) => !prevState)
    }

    function onSubmit(data: FormValues) {
        const formData = new FormData()
        formData.append("titulo", data.titulo)
        formData.append("descricao", data.descricao)
        formData.append("emailDestino", data.emailDestino)
        if (data.foto) {
            Array.from(data.foto).forEach(file => formData.append("foto", file))
        }

        fetchDados(formData)
    }

    async function fetchDados(formData: FormData) {
        const response = await axios.post("http://localhost:8080/upload", formData)
        console.log("Resposta da API:", response.data)
    }


    return(
        <main className='app'>
            <TopBar
                sideBarAbre={sideBarAbre}
            />
            <div className="layout">
                <SideBar
                sideBarOpen={sideBarOpen}
                createOcorrencia={createOcorrencia}
                />
                <div className="content">
                    <FormularioOcorrencia
                        newOcorrencia={newOcorrencia}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        register={register}
                    />
                </div>
            </div>

        </main>       
    )
}

export default App
