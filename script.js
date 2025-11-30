document.addEventListener('DOMContentLoaded', () => {
  const cabecalho = document.querySelector('.cabecalho');
  const linksNavegacao = Array.from(document.querySelectorAll('.menu a'));
  const secoes = Array.from(document.querySelectorAll('.secao'));

  function definirLinkAtivoPorId(id) {
    linksNavegacao.forEach(link => link.classList.toggle('link-ativo', link.getAttribute('href') === `#${id}`));
  }

  linksNavegacao.forEach(link => {
    link.addEventListener('click', (evento) => {
      const referencia = link.getAttribute('href');
      if (!referencia || !referencia.startsWith('#')) return;
      evento.preventDefault();
      const alvo = document.querySelector(referencia);
      if (!alvo) return;
      const deslocamentoTopo = alvo.getBoundingClientRect().top + window.scrollY - cabecalho.offsetHeight;
      window.scrollTo({ top: deslocamentoTopo, behavior: 'smooth' });
      definirLinkAtivoPorId(alvo.id);
    });
  });

  const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!movimentoReduzido) {
    const observadorExibicao = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) entrada.target.classList.add('visivel');
      });
    }, { threshold: 0.15 });
    secoes.forEach(secao => observadorExibicao.observe(secao));
  } else {
    secoes.forEach(secao => secao.classList.add('visivel'));
  }

  const observadorAtivo = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) definirLinkAtivoPorId(entrada.target.id);
    });
  }, { threshold: 0.6 });
  secoes.forEach(secao => observadorAtivo.observe(secao));
});
