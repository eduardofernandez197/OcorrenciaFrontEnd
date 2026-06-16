import { useState } from 'react'
import { useForm } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
import './App.css'
import axios from 'axios';


function App() {

    type FormValues = {
        title: string
        description: string
        fotos?: FileList
    }

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
            <div className='topbar'>
                <button onClick={sideBarAbre}>Menu</button>
            </div>
            <div className={sideBarOpen ? "sidebar abre" : "sidebar fecha"}>
                <div>
                    <button onClick={createOcorrencia}>Nova Ocorrência</button>
                </div>
            </div>
            <div className={newOcorrencia ? "newOcorrencia abre" : "newOcorrencia fecha"}>
                <form className='container' onSubmit={handleSubmit(onSubmit)}>
                    <div className='titleOcorrencia'>
                        <label htmlFor="titulo">Titulo</label>
                        <input  className='titleOcorrencias' type="text" id='titulo' {...register("title")} placeholder='Titulo'/>
                    </div>
                    <div className='descriptionOcorrencia' >
                        <textarea className='descriptionOcorrencias' {...register("description")} placeholder='Descreva o ocorrido'></textarea>                       
                    </div>
                    <div className='inputOcorrencia' >
                        <input className='inputOcorrencias' type="file" multiple {...register("fotos")}/>
                    </div>
                    <div className='enviaOcorrencia' >
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </main>       
    )
}

export default App