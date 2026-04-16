# React Native - configuração do Expo-Router

Neste projeto, será ensinado como configurar o projeto com navegação entre telas.

## Iniciação do projeto

### Criar projeto
Crie um projeto:
```bash
npx create-expo-app meuApp -t
```

### Escolher template 
Selecione o template `Blank (TypeScript)`:
```bash
  Default - includes tools recommended for most app developers
  Blank
>>Blank (TypeScript)
  Navigation (TypeScript)
  Blank (Bare)
```

### Executar na Web
Para rodar no navegador:
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

### Rodar o projeto
Acesse a pasta criada no terminal e execute:
```bash
npx expo start
```

## Configuração

### Instalando dependências
Instale as dependências necessárias
```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### Configurar ponto de entrada
Para a propriedade `main` do arquivo `package.json` , use o valor `use o expo-router/entry`;
```json
{
    "main": "expo-router/entry"
}
```

> Isto fará com que o Expo encontre automaticamente a pasta `app/` ou `src/app/`


### Configuraçao do app

#### Deep Linking
Defina o atributo `scheme` do arquivo `app.json` para o nome do seu app.
```json
{
    "name": "meuApp",
    "slug": "meuApp",
    "scheme": "meuApp"
}
```

`scheme` permite que seu app seja aberto através de um link personalizado.
Por exemplo: `meuApp://perfil/123`

#### Rotas tipadas
Isso ativa rotas tipadas (typed routes) no Expo Router. São rotas com tipagem automática do TypeScript, ou seja:
- O editor sabe quais rotas existem
- Evita erro de digitar rota errada
- Autocomplete funciona melhor
- Mais segurança no código

Em um erro como:
```javascript
router.push("/logni") // erro de digitação
```

o TypeScript já avisa erro:
```bash
Argument of type '"/logni"' is not assignable...
```

Porque ele sabe que `/logni` não existe.

## Babel - Transpilador
Para transformar o código moderno do Javascript compatível para as versões mais antigas/obsoletas.
```javascript
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};
```

### Limpar cache do bundler
Após atualizar a configuração, execute o seguinte comando para limpar o cache do bundler:
```bash
npx expo start --clear
```

## Estrutura do app


