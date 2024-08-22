import { Stack } from 'expo-router';
// importa o componente stack do modulo expo-router, usado para configurar a navegação em pilha (stack navigation)

import { Container } from '~/components/Container';
// importa o componente container de umn caminho relativo, geralmente usado para organizar e centralizar o conteudo da tela 

import { ScreenContent } from '~/components/ScreenContent';
// importa o componente screencontent que provavelmente é responsável por exibir o conteúdo especifico da tela, como texto e elementos visuais. 

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
      </Container>
    </>
  );
}
