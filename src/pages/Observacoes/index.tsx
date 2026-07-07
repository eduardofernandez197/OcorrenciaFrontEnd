import { ClipboardList } from "lucide-react";
import { TopBar } from "../../componentes/Components/TopBar"
import { useNavigate } from "react-router";
import {
    AdicionarObservacaoButton,
    ContainerIconBox,
    ObservacoesContainer,
    ObservacoesFooter,
    ObservacoesVazioContainer,
    ProgressBar,
    ProgressBarActive,
    ProgressContainer,
    ProgressStep
} from "./style";


export const Observacoes = () => {

    const navigate = useNavigate();

    const adicionaObservacao = () => {
        navigate("/ObservacoesForm");
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
                <ObservacoesVazioContainer>
                    <ContainerIconBox aria-hidden="true">
                        <ClipboardList size={28} strokeWidth={2} />
                    </ContainerIconBox>

                    <h2>Nenhuma observação ainda</h2>

                    <p>
                        Toque em "Adicionar Observação" para começar
                    </p>
                </ObservacoesVazioContainer>

                {/* Ação principal da tela. */}
                <ObservacoesFooter>
                    <AdicionarObservacaoButton onClick={adicionaObservacao} type="button">
                        <span className="buttonIcon">+</span>
                        <span>Adicionar Observação</span>
                    </AdicionarObservacaoButton>
                </ObservacoesFooter>
            </ObservacoesContainer>
        </>
    )
}
