# Ola DevOps

Projeto de exemplo para as aulas de DevOps (CI/CD) — UNIVAS.

## Sobre

Aplicação Node.js simples com pipeline de CI/CD/DevSecOps configurado via GitHub Actions:

- **CI**: roda testes automatizados e verificações de segurança (SCA e verificação de contêiner) e, após merge na `main`, publica a imagem Docker no GitHub Container Registry (GHCR).
- **CD**: após a publicação, um runner self-hosted faz o deploy automático da aplicação localmente via Docker Compose.
- **DevSecOps**: o pipeline inclui verificação de vulnerabilidades nas dependências (`npm audit`), análise estática do código (CodeQL) e verificação de vulnerabilidades na imagem do contêiner (Trivy), bloqueando o deploy caso alguma vulnerabilidade crítica seja encontrada.

## Por que Entrega Contínua (CD) é útil numa empresa

A entrega contínua (CD) é útil em empresas porque reduz o risco de erro humano no processo de deploy, já que a aplicação é publicada automaticamente sempre que o código passa nos testes e é aprovado na branch principal. Isso permite que novas funcionalidades e correções cheguem aos usuários mais rápido, sem depender de alguém executar manualmente os passos de implantação. Também dá mais confiança ao time, pois cada deploy segue exatamente o mesmo processo testado, evitando inconsistências entre ambientes. Em equipes maiores, isso libera desenvolvedores de tarefas repetitivas e permite entregas mais frequentes e pequenas, o que facilita identificar e corrigir problemas rapidamente.

## Por que DevSecOps é útil numa empresa

O DevSecOps é útil em empresas porque move a segurança para o início do processo de desenvolvimento, em vez de tratá-la como uma etapa isolada no final. Ao integrar verificações automáticas de dependências (SCA), do próprio código (SAST) e da imagem do contêiner diretamente no pipeline de CI/CD, a empresa consegue detectar vulnerabilidades antes que cheguem à produção, reduzindo custos de correção e riscos de segurança. Isso é especialmente importante em times com entregas frequentes, onde seria inviável revisar manualmente a segurança de cada mudança — a automação garante que nenhuma versão insegura seja publicada, sem depender de uma auditoria manual separada. Além disso, cria uma cultura onde segurança é responsabilidade de todos os desenvolvedores, não só de uma equipe de segurança isolada.