# Cadastro de carro

**RF**  
Deve ser possivel cadastrar um novo carro.

**RN**  
Não deve ser possivel cadastrar um carro com uma placa já existente.  
O carro deve ser cadastrado, por padrão com disponibilidade.  
O usuario responsavel pelo cadastro deve ser um usuario adminstrador.  

# Listagem de carro

**RF**  
Deve ser possivel listar todos os carros disponivel.  
Deve ser possivel listar todos os carros disponivel pelo nome da categoria.  
Deve ser possivel listar todos os carros disponivel pelo nome da marca.  
Deve ser possivel listar todos os carros disponivel pelo nome do carro.  

**RN**  
O usuário não precisa esta logado no sistema.  

# Cadastro de Especificação no carro

**RF**  
Deve ser Possivel Cadastrar uma especificação para um carro.  
Deve ser possivel listar todas as especificações.  
Deve ser possivel listar todos os carros.  

**RN**
Não deve ser possivel cadastrar uma especificação para um carronão cadastrado.  
Não deve ser possivel cadastrar uma especificação ja existente para o mesmo carro.  
O usuario responsavel pelo cadastro deve ser um usuario adminstrador.  

# Cadastro de imagens do carro

**RF**  
Deve ser possivel cadastrar a imagem do carro.  
Deve ser possivel listar todos os carros.

**RNF**  
Ultilizar o multer para upload dos arquivos.  

**RN**  
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.  
O usuario responsavel pelo cadastro deve ser um usuario adminstrador.  

# Aluguel de Carro

**RF**  
Deve ser possivel cadastrar um aluguel.  

**RN**  
O aluguel deve ter duração minima de 24 horas.  
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.  
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.  