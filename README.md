# DaHora Filmes

Exemplo de app nativo multiplataforma criado com React Native e Expo.

## Branch 10-processo-de-build-ou-compilacao

### Roteiro geral para o build usando o Expo EAS

1. Acessar a conta Expo e criar um projeto no Expo EAS: https://expo.dev
2. Instalar o eas-cli
3. Adicionar o id do projeto ao aplicativo (isso modificará o arquivo `app.json`)
4. Verificar a conta logada: `eas whoami`

- Se não estiver logado, use: `eas login`
- Se estiver logado e quiser deslogar (ou trocar de usuário), use: `eas logout`

5. Configurar o build (compilação): `eas build:configure`
6. Escolha Android e dê enter. Isso criará um arquivo chamado `eas.json`.
7. É necessário modificar o segmento `preview` dentro do `eas.json`, adicionando o código abaixo:

```json
"developmentClient" : true,
    "android" : {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
    },
```

8. Analisar os pacotes do projeto e outros possíveis problemas: `npx -y expo-doctor`. Se sinalizar pacotes desatualizados, execute: `npx expo install --fix`. Se sinalizar outros problemas (nas imagens por exemplo), corrija.
9. Adicionar ao `eas.json` a API Key de acordo com o conteúdo do arquivo `.env`:

```json
"env": {
    "EXPO_PUBLIC_API_KEY": "valor"
  }
```

10. Iniciar o processo de build/compilação: `eas build --profile preview`

## Branch 09-gerenciamento-de-favoritos

### Recursos nativo/lib: AsyncStorage

`AsyncStorage` é uma lib mantida pela equipe do Expo que permite armazenar dados **offline** em formato de `string` no dispositivo do usuário. É uma lib semelhante à API Web `localStorage` usada em sites.

## Branch 08-tela-de-detalhes-do-filme

- Criação da tela `Detalhes.js` e adição dela à `Stack` em `App.js`
- Em `CardFilme`, utilização do hook `useNavigation` para funcionalidade de navegação do botão **Leia mais**.
- Em `App.js` na `Stack.Screen Detalhes`, adicionamos uma prop `options` configurada para exibir um `Button` responsável por permitir a navegação direta para `Home`.

## Branch 07-melhorias-nos-resultados

- Loading usando `ActivityIndicator`
- Em `Resultados`, aplicamos à `FlatList` componentes personalizados para caso de não haver filmes na busca (`NaoEncontrado/ListEmptyComponent`) e para separar cada elemento da `FlatList` (`Separados/ItemSeparatorComponent`)
- Em `CardFilme` colocamos uma condicional para o carregamento de imagem alternativa caso algum filme não tenha imagem, e também ícones nos botões

## Branch 06-tela-de-resultados-e-programação-api

### Resumo

#### API de Filmes

- Cadastro na API TheMovieDB
- Criação de uma chave de API (API Key)
- Configuração de variável ambiente através do arquivo `.env` contendo a API Key via Expo. (arquivo ENV são ignorados no versionamento)

#### Consumo de dados da API

- Instalação da lib **Axios**
- Configuração/exportação do `services/api-moviedb.js` contendo a programação básica de acesso à API para uso em diferentes partes do app.

#### Exibição dos resultados

- Utilização do componente `FlatList` para listagem dinâmica dos resultados
- Criação do componente `CardFilme` com uso de prop (`filme`) com carregamento do `title` e do `poster_path` (imagem) de cada filme.

## Branch 05-desafio--tela-BuscarFilmes

### Solução: recursos utilizados

- Componentes/Recursos nativos: `TextInput`, `Button`, `Vibration` e `Alert`
- Eventos:
  - `onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e atualização no `state` usando a função `filmeDigitado`
  - `onPress` no `Button` para acionamento da função `buscarFilmes`
  - `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

### Orientações

1. Crie uma nova branch chamada **05-desafio--tela-BuscarFilmes**

2. Crie a tela `BuscarFilmes` e programe os recursos necessários para a estruturação e estilização, deixando semelhante às imagens de referência _(Veja no Teams)_.

3. Adicione esta tela à **Stack de navegação**

4. Em `Home`, programe o botão que faz a navegação para a tela `BuscarFilmes`

### Desafios

- Usar um componente nativo de campo de entrada de formulário
- Aplicar useState para captura do que é digitado no campo de formulário
- Usar um componente de alerta para validação básica: exibir mensagem na tela caso o usuário toque no botão sem preencher nada no formulário
- Usar o componente de alerta para mostrar mensagem dizendo "Você procurou pelo filme [mostrar o nome do filme digitado]

## Branch 04

Para gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navigation** e a **Expo Router**.

Atualmente (Fevereiro/2024) a biblioteca mais usada e considerada padrão é a **React Navigation**.

### Site oficial:

- React Navigation: https://reactnavigation.org/
- Expo Router: https://docs.expo.dev/router/introduction/

### Como usar o React Navigation com navegação Stack

#### Pacotes de instalação

React Navigation: `npm install @react-navigation/native`

Dependências para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

Mecanismo de navegação Stack: `npm install @react-navigation/native-stack`

#### Configurações

No `App.js` importamos o `NavigationContainer` e o `createNativeStackNavigator`, em seguida os configuramos para determinar o `Stack.Navigator` e as telas `Stack.Screen` e seus componentes correspondentes (no momento, apenas `Home`, `Privacidade` e `Sobre`).

Em `Home`, configuramos os botões para navegar para as telas usando a prop `navigation` e o método `navigate`.

## Branch 03

- Criação das telas básicas: Sobre e Privacidade
- Componente `ScrollView` para conteúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## Branch 02

### Utilização de fontes adicionais

- Download dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxílio dos `hooks` `useFonts` e `useCallback`.
- Aplicação das fontes usando regras de StyleSheet.

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/

---

## Dica

Instale a extensão **ES7+ React...** no VSCode para facilitar a programação de componentes.
