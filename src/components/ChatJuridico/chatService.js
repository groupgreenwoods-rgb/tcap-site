// chatService.js
export async function obterRespostaDaIA(pergunta) {
  // Simulando um delay de "processamento" da IA
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Entendi sua dúvida sobre: "${pergunta}". Como assistente do TCAP IA², estou analisando a base jurídica para te fornecer a melhor orientação.`);
    }, 1200);
  });
}