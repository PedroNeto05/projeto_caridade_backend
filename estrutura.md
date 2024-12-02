# Componentes
  - Pedro Nascimento de Paiva Fernandes Neto
  - Hélio Arruda Câmara Neto

# Link do Projeto
  - https://github.com/PedroNeto05/projeto_caridade_backend

# Descrição
  - O objetivo é desenvolver uma API RESTful para a organização de eventos de doações, fornecendo endpoints que permitam gerenciar de forma eficiente todas as operações necessárias. Essa API será responsável por lidar com o cadastro, autenticação e autorização.
  - A API incluirá recursos para gerenciar eventos de doações, permitindo a criação, atualização, listagem e exclusão de eventos. Cada evento poderá conter informações como título, descrição, data, local. Também será possível registrar e consultar doações associadas aos eventos, com detalhes como tipo de doação (dinheiro, bens ou serviços), quantidade e identificação do doador, garantindo rastreabilidade.

# Entities
  - User
  - Event
  - Donation
  - Subscription
  - Donations_Items

# Repositories
  ## User
  - Criar um usuário (POST)
  - Atualizar um usuário (PUT)
  - Buscar por um usuário (GET BY ID OR EMAIL)
  - Deletar um usuário (DELETE) 

  ## Event
  - Criar um evento (POST)
  - Atualizar um evento (PUT)
  - Buscar por um evento (GET BY ID)
  - Buscar por eventos pelo nome (GET BY NAME)
  - Buscar por todos os eventos (GET ALL)
  - Deletar evento (DELETE)

  ## Donation
  - Criar uma doação (POST)
  - Buscar por todas as doações de um usuário (GET BY USER_ID)
  - Buscar por todas as doações de um evento (GET BY EVENT_ID)
  - Buscar as doações de um usuário em um evento (GET BY EVENT_ID AND USER_ID)
  - Deletar uma doação (DELETE)

  ## Subscription
  - Criar um subs (POST)
  - Buscar por todos os subs de um usuário (GET BY USER_ID)
  - Buscar por todos os subs em um evento (GET BY EVENT_ID) (buscar por todos os usuários de um evento) 
  - Deletar um subs (DELETE)

  ## Donations_Items
  - Criar um item de doação (POST)
  - Atualizar um item de doação (PUT)
  - Deletar um item de doação (DELETE)

# Services
  ## User
  - Qualquer pessoa pode criar uma usuário com email único
  - Para atualizar ou deletar um usuário é necessário estar logado

  ## Event
  - Qualquer pessoa pode buscar por eventos
  - Para criar um evento é necessário estar logado
  - Para atualizar ou deletar um evento é necessário estar logado e ser dono do evento

  ## Donation
  - Qualquer pessoa pode buscar por doações
  - Para criar ou deletar uma doação é necessário estar logado e ser o dono do evento

  ## Subscription
  - Apenas usuários logados podem criar ou deletar subs

  ## Donations_Items
  - Para criar, atualizar ou deletar um item de doação é necessário estar logado e ser dono do evento
  
# Controllers
  ## UserController
  - Criar um usuário (POST /users)
  - Atualizar um usuário (PUT /users)
  - Buscar por um usuário (GET /users/{id})
  - Deletar um usuário (DELETE /users)

  ## EventController
  - Criar um evento (POST /events)
  - Atualizar um evento (PUT /events/{id})
  - Buscar por um evento (GET /events/{id})
  - Buscar por eventos pelo nome (GET /events/name/{name})
  - Buscar por todos os eventos (GET /events)
  - Buscar por todos os eventos que um usuário é dono (GET /events/user/{id})
  - Deletar evento (DELETE /events/{id})

  ## DonationController
  - Criar uma doação (POST /donations)
  - Buscar por todas as doações de um usuário (GET /donations/user/{userId})
  - Buscar por todas as doações de um evento (GET /donations/event/{eventId})
  - Buscar as doações que um usuário fez em um evento (GET /donations/event/{eventId}/user/{userId})
  - Deletar uma doação (DELETE /donations/{id})

  ## SubscriptionController
  - Criar um subs (POST /subs/{event_id})
  - Buscar por todos os subs de um usuário (GET /subs/user/{userId})
  - Buscar por todos os subs em um evento (GET /subs/event/{eventId})
  - Deletar um subs (DELETE /subs/{id})

  ## DonationsItemsController
  - Criar um item de doação (POST /donations_items/{donation_id})
  - Atualizar um item de doação (PUT /donations_items/{id})
  - Deletar um item de doação (DELETE /donations_items/{id})