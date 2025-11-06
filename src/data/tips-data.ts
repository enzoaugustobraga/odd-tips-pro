/**
 * ARQUIVO DE DICAS - ATUALIZAR DIARIAMENTE
 * 
 * Para atualizar as dicas do dia:
 * 1. Edite os arrays abaixo com as novas partidas
 * 2. Mantenha a mesma estrutura de dados
 * 3. Salve o arquivo
 * 
 * Estrutura de cada dica:
 * - match: Nome das equipes (ex: "Flamengo x Palmeiras")
 * - league: Nome da competição (ex: "Brasileirão Série A")
 * - betType: Tipo de aposta sugerida (ex: "Mais de 2.5 gols")
 * - odds: Odds aproximadas (ex: "1.85")
 * - analysis: Análise da partida (texto explicativo)
 */

export interface Tip {
  match: string;
  league: string;
  betType: string;
  odds: string;
  analysis: string;
}

export const tipsByBookmaker: Record<string, Tip[]> = {
  betano: [
    {
      match: "Flamengo x Palmeiras",
      league: "Brasileirão Série A",
      betType: "Mais de 2.5 gols",
      odds: "1.85",
      analysis: "Ambas as equipes apresentam ataques fortes e defesas inconsistentes nas últimas partidas. Histórico recente mostra média de 3.2 gols por jogo entre elas.",
    },
    {
      match: "São Paulo x Corinthians",
      league: "Brasileirão Série A",
      betType: "Ambos marcam",
      odds: "1.75",
      analysis: "Derby paulista sempre movimentado. As duas equipes marcaram em 4 dos últimos 5 confrontos diretos.",
    },
    {
      match: "Internacional x Grêmio",
      league: "Brasileirão Série A",
      betType: "Casa vence",
      odds: "2.10",
      analysis: "Internacional com forte desempenho em casa, vencendo 7 dos últimos 10 jogos no Beira-Rio. Grêmio com problemas defensivos fora de casa.",
    },
  ],
  bet365: [
    {
      match: "Real Madrid x Barcelona",
      league: "La Liga",
      betType: "Mais de 2.5 gols",
      odds: "1.90",
      analysis: "El Clásico historicamente com muitos gols. Média de 3.5 gols nos últimos 8 confrontos diretos.",
    },
    {
      match: "Manchester City x Liverpool",
      league: "Premier League",
      betType: "Ambos marcam",
      odds: "1.65",
      analysis: "Dois dos ataques mais poderosos da Inglaterra. Ambas as equipes marcaram em todos os últimos 6 jogos entre elas.",
    },
    {
      match: "Bayern x Dortmund",
      league: "Bundesliga",
      betType: "Casa vence",
      odds: "1.70",
      analysis: "Bayern dominante em casa, com 12 vitórias consecutivas na Allianz Arena. Dortmund com problemas de consistência fora.",
    },
  ],
  mgm: [
    {
      match: "PSG x Marseille",
      league: "Ligue 1",
      betType: "Casa vence e mais de 2.5 gols",
      odds: "2.25",
      analysis: "PSG dominante em casa e Marseille com defesa frágil. Combinação de resultado e gols oferece bom valor.",
    },
    {
      match: "Milan x Inter",
      league: "Serie A",
      betType: "Ambos marcam",
      odds: "1.80",
      analysis: "Derby della Madonnina sempre equilibrado. Ambas as equipes em boa fase ofensiva.",
    },
    {
      match: "Atlético Madrid x Sevilla",
      league: "La Liga",
      betType: "Menos de 2.5 gols",
      odds: "1.95",
      analysis: "Atlético conhecido por jogos truncados. Sevilla tem segundo melhor ataque e defesa equilibrada. Tende a ser jogo tático.",
    },
  ],
};
