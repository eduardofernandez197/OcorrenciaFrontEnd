import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import type { FormValues } from '../../../Types/types';

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
                        <input  className='titleOcorrencias' type="text" id='titulo' {...props.register("titulo")} placeholder='Titulo'/>
                    </div>
                    <div className='descriptionOcorrencia' >
                        <textarea className='descriptionOcorrencias' {...props.register("descricao")} placeholder='Descreva o ocorrido'></textarea>
                    </div>
                    <div className='emailOcorrencia' >
                        <label htmlFor="emailDestino">E-mail destino</label>
                        <input className='emailOcorrencias' type="email" id='emailDestino' {...props.register("emailDestino")} placeholder='Digite o e-mail' />
                    </div>
                    <div className='inputOcorrencia' >
                        <input className='inputOcorrencias' type="file" multiple {...props.register("foto")}/>
                    </div>
                    <div className='enviaOcorrencia' >
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
}
