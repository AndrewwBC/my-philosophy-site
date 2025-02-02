import { useEffect, useRef } from "react";
import { PostContainer } from "./styles";

function Post() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const innerHTML =
      '<h1> <strong>1 INTRODUÇÃO</strong></h1><p><br></p><p class="ql-align-justify"><strong><em> </em></strong>\t<span style="background-color: rgb(255, 153, 0);">A navegação na internet</span> engloba a utilização dos mais diversos serviços. Do e-mail ao portal de notícias, utilizam-se diversas estruturas de comunicação conhecidas como protocolos. Neste contexto, destaca-se o protocolo HTTP, o fundamento da web. Toda informação que trafega entre sites é estruturada por este protocolo, cujos softwares de <em>front-end</em>, responsável pela nterface com a qual o usuário interage, e <em>back-end</em>, que possui a finalidade de gerenciar os dados oriundos do <em>front-end</em>, encontram-se hospedados e disponibilizados em plataformas através da<em>internet</em>.</p><p class="ql-align-justify"> \tTais plataformas recebem popularmente a nomenclatura de nuvem. A disponibilização de serviços como hospedagem e armazenamento, através da <em>internet </em>é o que conceitua a nuvem. Esta estratégia está diretamente relacionada aos serviços conhecidos como plataformas como serviço (PaaS)e infraestrutura como serviço (IaaS)<em>.</em>À luz desta ideia, destacam-se a utilização das máquinas virtuais, tanto para utilização limitada, como no PaaS<em>,</em> quanto para customização livre, como naIaaS<em>.</em></p><p class="ql-align-justify"> \tNo contexto da customização livre, a infraestrutura como serviço oferece a possibilidade de configurar máquinas virtuais com os mais diversos <em>softwares</em>, como o servidor <em>web</em>, <em>firewall</em>, <em>proxy</em>, banco de dados, <em>backups, </em>bem como a utilização de técnicas para a realização do <em>deploy </em>de uma aplicação de maneira personalizável.</p><p class="ql-align-justify"> \tVisando estas características, o objetivo deste trabalho é unir as tecnologias disponíveis em cada camada do desenvolvimento de um sistema para <em>web</em>, desde o <em>front-end</em> até o <em>deploy</em>, a fim de obter resultados adequados em relação a implementação e entrega do <em>software,</em> a partir de técnicas como a <em>blue-green deployment.</em></p><p class="ql-align-justify"><em> </em>\tOs seguintes capítulos demonstrarão as etapas percorridas para a realização deste trabalho, iniciando pelo capítulo dois, que diz respeito a <em>web </em>na <em>internet</em>, bem como as camadas para a implementação de aplicativos <em>web</em>. O estudo de caso, Pets4Ever, será apresentado no capítulo seguinte, o terceiro. O capítulo quatro versa a respeito das tecnologias utilizadas para a implementação do estudo de caso. Na sequência é apresentada a implementação da técnica <em>blue-greendeployment.</em> Por fim, as considerações finais.</p><p><br></p>';

    const innerHTMLFixed = innerHTML.replace("<br>", "<br/>");

    divRef.current!.innerHTML = innerHTMLFixed;
  }, []);

  return (
    <PostContainer>
      <div id="editor" className="ql-editor" ref={divRef}></div>
    </PostContainer>
  );
}

export default Post;
