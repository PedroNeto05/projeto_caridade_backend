# Entity
  - User
  - Event
  - Donation
  - Subscription
  - Donations_Items

# Repository
  ## User
  - Criar um usuário (POST)
  - Atualizar um usuário (PUT)
  - Buscar por um usuário (GET BY ID OR EMAIL)
  - Buscar por todos os usuários (GET ALL)
  - Deletar um usuário (DELETE)

  ## Event
  - Criar um evento (POST)
  - Atualizar um evento (PUT)
  - Buscar por um evento (GET BY ID)
  - Buscar por eventos em uma data (GET BY DATE)
  - Buscar por eventos pelo nome (GET BY NAME)
  - Buscar por eventos em um local (GET BY LOCATION)
  - Buscar por todos os eventos (GET ALL)
  - Deletar evento (DELETE)

  ## Donation
  - Criar uma doação (POST)
  - Buscar por uma doação (GET BY ID)
  - Buscar por todas as doações (GET ALL)
  - Buscar por todas as doações de um usuário (GET BY USER_ID)
  - Buscar por todas as doações de um evento (GET BY EVENT_ID)
  - Buscar as doações de um usuário em um evento (GET BY EVENT_ID AND USER_ID)
  - Deletar uma doação (DELETE)

  ## Subscription
    - Criar um subs (POST)
    - Atualizar um subs (PUT)
    - Buscar por um subs (GET BY ID)
    - Buscar por todos os subs (GET ALL)
    - Buscar por todos os subs de um usuário (GET BY USER_ID)
    - Buscar por todos os subs em um evento (GET BY EVENT_ID) (buscar por todos os usuários de um evento) 
    - Deletar um subs (DELETE)

  ## Donations_Items
  - Criar um item de doação (POST)
  - Atualizar um item de doação (PUT)
  - Buscar por um item de doação (GET BY ID)
  - Buscar por todos os items de um tipo (GET BY DONATION_TYPE)
  - Buscar por todos os itens de doação (GET ALL)
  - Deletar um item de doação (DELETE)

# Service
  ## User
  - Qualquer pessoa pode criar uma usuário com email único
  - Para atualizar ou deletar um usuário é necessário estar logado

  ## Event
  - Qualquer pessoa pode buscar por eventos
  - Para criar um evento é necessário estar logado
  - Para atualizar ou deletar um evento é necessário estar logado e ser dono do evento

  ## Donation
  - Qualquer pessoa pode buscar por doações
  - Para criar ou deletar uma doação é necessário estar logado e ter permissão

  ## Subscription
  - Apenas usuários com permissão e logados podem atualizar ou deletar subs 
  - Para se-inscrever no evento é necessário estar logado (criar um subs)

  ## Donations_Items
  - Qualquer pessoa pode buscar por itens de doação
  - Para criar, atualizar ou deletar um item de doação é necessário estar logado e ter permissão
  
# Controller
  ## UserController
  - Criar um usuário (POST /users)
  - Atualizar um usuário (PUT /users)
  - Buscar por um usuário (GET /users/{id})
  - Deletar um usuário (DELETE /users)

  ## EventController
  - Criar um evento (POST /events)
  - Atualizar um evento (PUT /events/{id})
  - Buscar por um evento (GET /events/{id})
  - Buscar por eventos em uma data (GET /events/date/{date})
  - Buscar por eventos pelo nome (GET /events/name/{name})
  - Buscar por eventos em um local (GET /events/location/{location})
  - Buscar por todos os eventos (GET /events)
  - Deletar evento (DELETE /events/{id})

  ## DonationController
  - Criar uma doação (POST /donations)
  - Buscar por uma doação (GET /donations/{id})
  - Buscar por todas as doações (GET /donations)
  - Buscar por todas as doações de um usuário (GET /donations/user/{userId})
  - Buscar por todas as doações de um evento (GET /donations/event/{eventId})
  - Buscar as doações de um usuário em um evento (GET /donations/event/{eventId}/user/{userId})
  - Deletar uma doação (DELETE /donations/{id})

  ## SubscriptionController
  - Criar um subs (POST /subs)
  - Atualizar um subs (PUT /subs/{id})
  - Buscar por um subs (GET /subs/{id})
  - Buscar por todos os subs (GET /subs)
  - Buscar por todos os subs de um usuário (GET /subs/user/{userId})
  - Buscar por todos os subs em um evento (GET /subs/event/{eventId})
  - Deletar um subs (DELETE /subs/{id})

  ## DonationsItemsController
  - Criar um item de doação (POST /donations_items)
  - Atualizar um item de doação (PUT /donations_items/{id})
  - Buscar por um item de doação (GET /donations_items/{id})
  - Buscar por todos os items de um tipo (GET /donations_items/type/{donationTypeId})
  - Buscar por todos os itens de doação (GET /donations_items)
  - Deletar um item de doação (DELETE /donations_items/{id})
