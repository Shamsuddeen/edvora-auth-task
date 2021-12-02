# edvora-auth-task
## Running the API
- Fork this Repo
- npm install
- npm run dev

## API Routes:
### All Request requires Bearer Token except Registering new Account and Login. Token can be gotten upon successful Login
- GET /api/v1/users
- POST /api/v1/users

- POST /api/v1/users/auth/register
- POST /api/v1/users/auth/login
- GET /api/v1/users/auth/logout
- PUT /api/v1/users/lauth/updatepassword
