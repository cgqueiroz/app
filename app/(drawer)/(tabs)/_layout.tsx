import { Tabs } from 'expo-router';
//importa o componente tabs do modulo 'expo-router', que é usado para criar uma navegação de abas na aplicação

import { TabBarIcon } from '~/components/TabBarIcon';
// importa o componente 'tabbaricon' de um caminho relativo, este componente será usado pora renderizar icones personalizados na barra de abas
// opção de colocar a foto de perfil do usuario e notificações (bolinha vermelha)

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // esconde o cabeçalho padrão;
        tabBarActiveTintColor: 'blue', // define a cor de texto dos icones;
      }}> 
      {/* 
        o componente tabs organiza a nagevação da app em um layout de abas 
        as ações screenoptions configuram o comportamento e a aparência das abas
      */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      {/* 
      define a primeira aba com o nome da rota index
      title: tab one define o titulo da aba
      tabbarion utiliza o componente tabbarion para renderizar um icone com base na cor escolhida
      */}
      <Tabs.Screen
        name="two"
        options={{
          title: 'Heart',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
            {/* 
      define a segunda aba com o nome da rota two
      title: tab two define o titulo da aba
      tabbarion utiliza o componente tabbarion para renderizar um icone com base na cor escolhida
      */}
    </Tabs>
  );
}
