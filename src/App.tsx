import { useState } from 'react'
import { useForm } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
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
        formData.append("title", data.title)
        formData.append("description", data.description)
        if (data.fotos) {
            Array.from(data.fotos).forEach(file => formData.append("fotos", file))
        }

        fetchDados(formData)
    }

    async function fetchDados(formData: FormData) {
        const response = await axios.post("http://localhost:8080/ocorrencias", formData)
        console.log("Resposta da API:", response.data)
    }


    return(
        <main>
            <TopBar
                sideBarAbre={sideBarAbre}
            />
            <SideBar
            sideBarOpen={sideBarOpen}
            createOcorrencia={createOcorrencia}
            />
            <FormularioOcorrencia
                newOcorrencia={newOcorrencia}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
            />
        </main>       
    )
}

export default App
