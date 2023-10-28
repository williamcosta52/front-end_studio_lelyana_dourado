import {
  DescriptionContainer,
  FirstDescriptionDiv,
  MidDescriptionDiv,
  LastDescriptionDiv,
} from './style';
import woman from '../../assets/woman.png';
import weight from '../../assets/weight.png';
import Line from '../line/Line';

export default function Description() {
  return (
    <DescriptionContainer>
      <FirstDescriptionDiv>
        <p>
          Espaço de atendimento especializado nas modalidades de Kangoo e
          Treinamento Funcional, buscando sempre a evolução.
        </p>
      </FirstDescriptionDiv>
      <MidDescriptionDiv>
        <img src={woman} />
        <p>
          Kangoo, também chamadas de botas de reboot, são calçados esportivos
          criados na década de 1990 pelo engenheiro Denise Mejia. Essas botas
          possuem molas na sola para absorver até 80% do impacto e reduzir o
          estresse nas articulações durante exercícios de alto impacto, como
          corrida e aeróbica. Promovem drenagem linfática. Elas são usadas em
          atividades aeróbicas, treinamento cardiovascular, reabilitação e por
          atletas, proporcionando uma maneira única de simular saltos e corridas
          para o treinamento de resistência e força.
        </p>
      </MidDescriptionDiv>
      <LastDescriptionDiv>
        <p>
          O treinamento funcional é uma abordagem de condicionamento físico que
          se concentra em exercícios que mimetizam movimentos do dia a dia,
          fortalecendo grupos musculares específicos e melhorando a estabilidade
          e a mobilidade. Seus benefícios incluem o aprimoramento da força,
          equilíbrio, coordenação e resistência, tornando-o particularmente
          eficaz para melhorar o desempenho em atividades diárias e esportes.
          Além disso, o treinamento funcional pode reduzir o risco de lesões,
          promover uma postura melhor e aumentar a consciência corporal,
          contribuindo para uma qualidade de vida geralmente mais saudável.
        </p>
        <img src={weight} />
      </LastDescriptionDiv>
      <Line />
    </DescriptionContainer>
  );
}
