import { Camera, Image, ImageIcon } from "lucide-react";
import { TopBar } from "../../componentes/Components/TopBar";
import {
    BotaoFoto,
    BotaoSalvarObservacao,
    CampoContainer,
    CampoInput,
    CampoLabel,
    CampoTextarea,
    FormularioFooter,
    FormularioObservacao,
    FotosAcoes,
    FotosContainer,
    FotosTitulo,
    ObservacaoCard,
    ObservacaoContainer,
    ObservacaoNumero,
    ObservacaoTexto
} from "./style";

export const ObservacoesForm = () => {
    return (
        <>
            <TopBar title="Observação 01" ButtomVoltar />

            <ObservacaoContainer aria-label="Formulário da observação">
                {/* Identifica qual observação está sendo preenchida. */}
                <ObservacaoCard>
                    <ObservacaoNumero>01</ObservacaoNumero>

                    <ObservacaoTexto>
                        <h2>OBSERVAÇÃO 01</h2>
                        <p>Preencha os dados e adicione fotos</p>
                    </ObservacaoTexto>
                </ObservacaoCard>

                {/* Formulário principal da observação. */}
                <FormularioObservacao>
                    <CampoContainer>
                        <CampoLabel htmlFor="tituloObservacao">
                            TÍTULO DA OBSERVAÇÃO <span className="required">*</span>
                        </CampoLabel>
                        <CampoInput
                            id="tituloObservacao"
                            name="tituloObservacao"
                            type="text"
                            placeholder="Ex: Quadro de distribuição com ferrugem"
                            required
                        />
                    </CampoContainer>

                    <CampoContainer>
                        <CampoLabel htmlFor="descricaoObservacao">
                            DESCRIÇÃO / OBSERVAÇÃO TÉCNICA
                        </CampoLabel>
                        <CampoTextarea
                            id="descricaoObservacao"
                            name="descricaoObservacao"
                            placeholder="Descreva detalhadamente o que foi observado, não conformidades, recomendações..."
                        />
                    </CampoContainer>

                    {/* Ações para adicionar fotos na observação. */}
                    <FotosContainer>
                        <FotosTitulo>
                            <ImageIcon size={12} strokeWidth={2} />
                            <span>FOTOS DESTA OBSERVAÇÃO</span>
                        </FotosTitulo>

                        <FotosAcoes>
                            <BotaoFoto type="button" $active>
                                <Camera size={22} strokeWidth={2} />
                                <span>Tirar Foto</span>
                            </BotaoFoto>

                            <BotaoFoto type="button">
                                <Image size={22} strokeWidth={2} />
                                <span>Da Galeria</span>
                            </BotaoFoto>
                        </FotosAcoes>
                    </FotosContainer>

                    {/* Ação final do formulário. */}
                    <FormularioFooter>
                        <BotaoSalvarObservacao type="submit">
                            Salvar Observação
                        </BotaoSalvarObservacao>
                    </FormularioFooter>
                </FormularioObservacao>
            </ObservacaoContainer>
        </>
    )
}
