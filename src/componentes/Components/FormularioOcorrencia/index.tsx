import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type FormValues = {
    title: string
    description: string
    fotos?: FileList
}

type FormularioOcorrenciaProps = {
    newOcorrencia: boolean;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    onSubmit: SubmitHandler<FormValues>;
    register: UseFormRegister<FormValues>;
}

export const FormularioOcorrencia = (props: FormularioOcorrenciaProps) => {
    return  <div className={props.newOcorrencia ? "newOcorrencia abre" : "newOcorrencia fecha"}>
                <form className='container' onSubmit={props.handleSubmit(props.onSubmit)}>
                    <div className='titleOcorrencia'>
                        <label htmlFor="titulo">Titulo</label>
                        <input  className='titleOcorrencias' type="text" id='titulo' {...props.register("title")} placeholder='Titulo'/>
                    </div>
                    <div className='descriptionOcorrencia' >
                        <textarea className='descriptionOcorrencias' {...props.register("description")} placeholder='Descreva o ocorrido'></textarea>
                    </div>
                    <div className='inputOcorrencia' >
                        <input className='inputOcorrencias' type="file" multiple {...props.register("fotos")}/>
                    </div>
                    <div className='enviaOcorrencia' >
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
}
