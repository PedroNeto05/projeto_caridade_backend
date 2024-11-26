# Entity
  - User
  - Event
  - Donation
  - Roles
  - Permissions
  - Event_Roles
  - Donation_Types
  - Role_Permissions
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

  ## Roles
  - Criar uma role (POST)
  - Atualizar uma role (PUT)
  - Buscar por uma role (GET BY ID)
  - Buscar por todas as roles (GET ALL)
  - Deletar uma role (DELETE)

  ## Permissions
  - Criar uma permissão (POST)
  - Atualizar uma permissão (PUT)
  - Buscar por uma permissão (GET BY ID)
  - Buscar por todas as permissões (GET ALL)
  - Deletar uma permissão (DELETE)

  ## Event_Roles
  - Criar um event_role (POST)
  - Atualizar um event_role (PUT)
  - Buscar por um event_role (GET BY ID)
  - Buscar por todos os event_roles (GET ALL)
  - Buscar por todos os event_roles de um usuário (GET BY USER_ID)
  - Buscar por todos os event_roles em um evento (GET BY EVENT_ID) (buscar por todos os usuários de um evento)
  - Buscar por todos os event_roles de uma role em evento (GET BY ROLE_ID AND EVENT_ID) (saber quantas pessoas de uma role tem nesse evento) 
  - Deletar um event_role (DELETE)

  ## Donation_Types
  - Criar um tipo de doação (POST)
  - Buscar por um tipo de doação (GET BY ID)
  - Buscar por todos os tipos de doação (GET ALL)
  - Deletar um tipo de doação (DELETE)

  ## Role_Permissions
  - Criar uma permissão de role (POST)
  - Buscar por uma permissão de role (GET BY ID)
  - Buscar por todas as permissões de uma role (GET BY ROLE_ID)
  - Buscar por todas as permissões de role (GET ALL)
  - Deletar uma permissão de role (DELETE)

  ## Donations_Items
  - Criar um item de doação (POST)
  - Atualizar um item de doação (PUT)
  - Buscar por um item de doação (GET BY ID)
  - Buscar por todos os items de um tipo (GET BY DONATION_TYPE_ID)
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

  ## Roles
  - Apenas usuários com permissão podem criar, atualizar ou deletar roles
  - Todos os usuários podem ver as roles

  ## Permissions
  - Apenas usuários com permissão podem ver,criar, atualizar ou deletar permissões
  - Um organizador tem todas as permissões por padrão

  ## Event_Roles
  - Apenas usuários com permissão e logados podem atualizar ou deletar event_roles 
  - Para se-inscrever no evento é necessário estar logado (criar um event_roles)

  ## Donation_Types
  - Apenas usuários com permissão podem criar ou deletar tipos de doação
  - Qualquer pessoa pode buscar por tipos de doação

  ## Role_Permissions
  - Apenas usuários com permissão podem criar ou deletar permissões de role

  ## Donations_Items
  - Qualquer pessoa pode buscar por itens de doação
  - Para criar, atualizar ou deletar um item de doação é necessário estar logado e ter permissão