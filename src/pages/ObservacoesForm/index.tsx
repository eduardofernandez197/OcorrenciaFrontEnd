import { Camera, Image, ImageIcon } from "lucide-react";
import { TopBar } from "../../componentes/Components/TopBar";
import { useNavigate } from "react-router";
import { useState } from "react";
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

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [foto, setFoto] = useState<File | null>(null);

    const navigate = useNavigate();

    const SalvarObservacao = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault

        if (!titulo.trim()) {
            alert("Informe o título da observação.");
            return;
        }

        if (!descricao.trim()) {
            alert("Informe a descrição da observação.");
            return;
        }

        if (!foto) {
            alert("Adicione uma foto.");
              return;
        }

        navigate("/Observacoes");
  };

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
                <FormularioObservacao onSubmit={SalvarObservacao}>
                    <CampoContainer>
                        <CampoLabel htmlFor="tituloObservacao">
                            TÍTULO DA OBSERVAÇÃO <span className="required">*</span>
                        </CampoLabel>
                        <CampoInput
                            value={titulo}
                            onChange={(event) => setTitulo(event.target.value)}
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
                            value={descricao}
                            onChange={(event) => setDescricao(event.target.value)}
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
                          {/* Input escondido que abre a camera do celular. */}
                          <input
                            id="fotoCamera"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            hidden
                            onChange={(event) => {
                              // Pega a primeira foto selecionada; se nao tiver foto, salva null.
                              const arquivo = event.target.files?.[0] ?? null;
                              setFoto(arquivo);
                            }}
                          />

                          {/* O htmlFor conecta esse botao visual ao input com id="fotoCamera". */}
                          <BotaoFoto htmlFor="fotoCamera" $active>
                            <Camera size={22} strokeWidth={2} />
                            <span>Tirar Foto</span>
                          </BotaoFoto>

                          {/* Input escondido que abre a galeria de imagens. */}
                          <input
                            id="fotoGaleria"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(event) => {
                              // Pega a primeira imagem selecionada; se nao tiver imagem, salva null.
                              const arquivo = event.target.files?.[0] ?? null;
                              setFoto(arquivo);
                            }}
                          />

                          {/* O htmlFor conecta esse botao visual ao input com id="fotoGaleria". */}
                          <BotaoFoto htmlFor="fotoGaleria">
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
