document.addEventListener("DOMContentLoaded", () => {
  const cabecalho = document.querySelector(".cabecalho");
  const linksNavegacao = Array.from(document.querySelectorAll(".menu a"));
  const secoes = Array.from(document.querySelectorAll(".secao"));
  const suportaObserver = "IntersectionObserver" in window;
  const suportaScrollSuave = "scrollBehavior" in document.documentElement.style;

  function definirLinkAtivoPorId(id) {
    linksNavegacao.forEach((link) =>
      link.classList.toggle(
        "link-ativo",
        link.getAttribute("href") === `#${id}`,
      ),
    );
  }

  linksNavegacao.forEach((link) => {
    link.addEventListener(
      "click",
      (evento) => {
        const referencia = link.getAttribute("href");
        if (!referencia || referencia.charAt(0) !== "#") return;
        evento.preventDefault();
        const alvo = document.querySelector(referencia);
        if (!alvo) return;
        const deslocamentoTopo =
          alvo.getBoundingClientRect().top +
          window.scrollY -
          cabecalho.offsetHeight;
        if (suportaScrollSuave) {
          window.scrollTo({ top: deslocamentoTopo, behavior: "smooth" });
        } else {
          window.scrollTo(0, deslocamentoTopo);
        }
        definirLinkAtivoPorId(alvo.id);
      },
      { passive: true },
    );
  });

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!movimentoReduzido && suportaObserver) {
    const observadorExibicao = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) entrada.target.classList.add("visivel");
        });
      },
      { threshold: 0.15 },
    );
    secoes.forEach((secao) => observadorExibicao.observe(secao));
  } else {
    secoes.forEach((secao) => secao.classList.add("visivel"));
  }

  if (suportaObserver) {
    const observadorAtivo = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) definirLinkAtivoPorId(entrada.target.id);
        });
      },
      { threshold: 0.6 },
    );
    secoes.forEach((secao) => observadorAtivo.observe(secao));
  } else {
    const atualizarLinkAtivoPorScroll = () => {
      let alvoAtual = secoes[0];
      let menorDistancia = Infinity;
      secoes.forEach((secao) => {
        const topo = secao.getBoundingClientRect().top - cabecalho.offsetHeight;
        const distancia = Math.abs(topo);
        if (distancia < menorDistancia) {
          menorDistancia = distancia;
          alvoAtual = secao;
        }
      });
      if (alvoAtual) definirLinkAtivoPorId(alvoAtual.id);
    };
    window.addEventListener("scroll", atualizarLinkAtivoPorScroll, {
      passive: true,
    });
    atualizarLinkAtivoPorScroll();
  }
});
