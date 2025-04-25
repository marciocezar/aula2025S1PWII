# Proximo:  
## 1-Login dos usuários / Novo usuário com hash (registro)  *****
## 2-Deletar os usuários
## 3-Inserir os usuários
## 4-Atualizar os usuários

## Estrutura do Projeto
product-api/
├── config/
│   └── config.js *
├── controllers/
│   └── authController.js **
│   └── productController.js
│   └── testController.js *
│   └── userController.js *
├── models/
│   └── product.js
│   └── user.js *
├── routes/
│   └── testRoute.js *
│   └── authRoutes.js **
│   └── productRoutes.js
│   └── userRoutes.js *
├── middlewares/
│   └── authMiddleware.js
├── swagger/
│   └── swagger.js
├── .env *
├── app.js * 
├── package.json *
└── server.js *