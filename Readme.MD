# Cadastro de carro

**RF**__
Deve ser possivel cadastrar um novo carro.__
Deve ser possivel listar todas as categorias.__

**RN**__
Não deve ser possivel cadastrar um carro com uma placa já existente.__
Não deve ser possivel alterar a placa de um carro já cadastrado.__
O carro deve ser cadastrado, por padrão com disponibilidade.__
O usuario responsavel pelo cadastro deve ser um usuario adminstrador.__

# Listagem de carro

**RF**__ 
Deve ser possivel listar todos os carros disponivel.__
Deve ser possivel listar todos os carros disponivel pelo nome da categoria.__
Deve ser possivel listar todos os carros disponivel pelo nome da marca.__
Deve ser possivel listar todos os carros disponivel pelo nome do carro.__

**RN**__
O usuário não precisa esta logado no sistema.__

# Cadastro de Especificação no carro

**RF**__
Deve ser Possivel Cadastrar uma especificação para um carro.__
Deve ser possivel listar todas as especificações.__
Deve ser possivel listar todos os carros.__

**RN**__
Não deve ser possivel cadastrar uma especificação para um carronão cadastrado.__
Não deve ser possivel cadastrar uma especificação ja existente para o mesmo carro.__
O usuario responsavel pelo cadastro deve ser um usuario adminstrador.__

# Cadastro de imagens do carro

**RF**__
Deve ser possivel cadastrar a imagem do carro.__
Deve ser possivel listar todos os carros .__

**RNF**__
Ultilizar o multer para upload dos arquivos.__

**RN**__
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.__
O usuario responsavel pelo cadastro deve ser um usuario adminstrador.__

# Aluguel de Carro

**RF**__
Deve ser possivel cadastrar um aluguel.__

**RN**__
O aluguel deve ter duração minima de 24 horas.__
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.__
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.__