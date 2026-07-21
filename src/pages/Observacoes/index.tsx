import { ClipboardList, Pencil, Trash2 } from "lucide-react";
import { TopBar } from "../../componentes/Components/TopBar"
import { useNavigate } from "react-router";
import {
    AdicionarObservacaoButton,
    ContainerIconBox,
    EditarButton,
    ExcluirButton,
    ListaObservacoes,
    ObservacaoAcoes,
    ObservacaoCard,
    ObservacaoCardHeader,
    ObservacaoConteudo,
    ObservacaoMeta,
    ObservacaoNumero,
    ObservacoesContainer,
    ObservacoesFooter,
    ObservacoesVazioContainer,
    PreVisualizacaoButton,
    ProgressBar,
    ProgressBarActive,
    ProgressContainer,
    ProgressStep,
    StatusCompleto
} from "./style";

import {
    Eye
} from "lucide-react";

type Observacao = {
    id: number;
    titulo: string;
    descricao: string;
    foto: File;
}

type ObservacoesProps = {
    observacoes: Observacao[];
}

export const Observacoes = ({ observacoes }: ObservacoesProps) => {

    const navigate = useNavigate();

    const adicionaObservacao = () => {
        navigate("/ObservacoesForm");
    };

    const irParaPreVisualizacao = () => {
        navigate("/PreVisualizacao");
    };

    const formatarNumeroObservacao = (index: number) => {
        return String(index + 1).padStart(2, "0");
    };

    return (
        <>
            <TopBar title="Observações" ButtomVoltar />

            <ObservacoesContainer aria-label="Observações">
                {/* Indicador visual da etapa atual do formulário. */}
                <ProgressContainer aria-label="Progresso do formulário">
                    <ProgressBar>
                        <ProgressBarActive />
                        <ProgressBarActive />
                    </ProgressBar>

                    <ProgressStep>2/2</ProgressStep>
                </ProgressContainer>

                {/* Estado vazio mostrado antes de adicionar observações. */}
                {observacoes.length === 0 ? (
                  <ObservacoesVazioContainer>
                    <ContainerIconBox aria-hidden="true">
                        <ClipboardList size={28} strokeWidth={2} />
                    </ContainerIconBox>

                    <h2>Nenhuma observação ainda</h2>

                    <p>
                        Toque em "Adicionar Observação" para começar
                    </p>
                  </ObservacoesVazioContainer>
                ) : (
                  <ListaObservacoes>
                    {observacoes.map((observacao, index) => (
                      <ObservacaoCard key={observacao.id}>
                        <ObservacaoCardHeader>
                            <ObservacaoNumero>{formatarNumeroObservacao(index)}</ObservacaoNumero>

                            <ObservacaoConteudo>
                                <h3>OBSERVAÇÃO {formatarNumeroObservacao(index)}</h3>
                                <StatusCompleto>Completo</StatusCompleto>
                                <strong>{observacao.titulo}</strong>
                                <p>{observacao.descricao}</p>
                                <ObservacaoMeta>1 foto</ObservacaoMeta>
                            </ObservacaoConteudo>
                        </ObservacaoCardHeader>

                        <ObservacaoAcoes>
                            <EditarButton type="button">
                                <Pencil size={14} strokeWidth={2} />
                                <span>Editar</span>
                            </EditarButton>

                            <ExcluirButton type="button" aria-label="Excluir observaÃ§Ã£o">
                                <Trash2 size={15} strokeWidth={2} />
                            </ExcluirButton>
                        </ObservacaoAcoes>
                      </ObservacaoCard>
                    ))}
                  </ListaObservacoes>
                )}  


                {/* Ação principal da tela. */}
                <ObservacoesFooter>
                    {observacoes.length > 0 && (
                        <PreVisualizacaoButton onClick={irParaPreVisualizacao}>
                            <span className="buttonIcon"><Eye/></span>
                            <span>Pré-visualizar Relatório</span>
                        </PreVisualizacaoButton>
                    )}

                    <AdicionarObservacaoButton onClick={adicionaObservacao} type="button">
                        <span className="buttonIcon">+</span>
                        <span>Adicionar Observação</span>
                    </AdicionarObservacaoButton>
                </ObservacoesFooter>
            </ObservacoesContainer>
        </>
    )
}
