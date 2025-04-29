# Developer Guide HealthSync

- Local Setup
- Frontend Setup
- Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Installation Steps

# Clone the repository
git clone [https://github.com/McRonaah/HealthSync](https://github.com/McRonaah/HealthSync)

# Navigate to frontend directory
```
cd HealthSync/frontend
```

# Install dependencies
npm install

# Create environment file (copy from template)
```
cp .env.example .env
```

# Start development server
```
npm run dev
```

### Environment Configuration

VITE_API_BASE_URL: Backend API endpoint
VITE_SUPABASE_URL: Supabase project URL
VITE_SUPABASE_ANON_KEY: Supabase anonymous key

## Backend Setup
Prerequisites

- Java Development Kit (JDK 17+)
- Maven
- MySQL 8.0
- Installation Steps


## Navigate to backend directory
```
cd HealthSync/backend
```
## Create MySQL database
```
mysql -u root -p -e "CREATE DATABASE his_db;"
```

## Configure application.properties with database credentials

## Build the project
```
mvn clean install
```

## Run the application
```
mvn spring-boot:run
```

- Architecture Overview
- Frontend Architecture
- Framework: React with TypeScript
- Build Tool: Vite
- State Management: Context API + React Query for data fetching
- -UI Components: Custom components using Tailwind CSS and shadcn/ui
- Routing: React Router v6
- API Integration: Spring boot Java

### The frontend follows a component-based architecture with:

- Pages: Main views (Dashboard, Clients, Programs, Reports)
- Components: Reusable UI elements
- Hooks: Custom logic for data fetching, authentication, etc.
- Context: Global state like authentication
- Types: TypeScript interfaces and type definitions
### Backend Architecture
- Framework: Spring Boot
- Database: MySQL with JPA/Hibernate
- - API: RESTful endpoints with JSON payloads
- Authentication: JWT-based with Spring Security
- Documentation: OpenAPI/Swagger

### The backend follows a layered architecture:

- Controllers: Handle HTTP requests and responses
- Services: Business logic implementation
- Repositories: Data access layer
- Models: Entity definitions
- DTOs: Data transfer objects for API contracts
- Config: Application configuration
- API Usage Patterns
- Authentication
- All API requests (except public endpoints) require a Bearer token:


// Frontend example
```
const fetchClients = async () => {
  const response = await fetch(`${API_URL}/clients`, {
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
Standard API Response Format

{
  "success": true,
  "data": [...],
  "message": "Operation successful",
  "timestamp": "2023-04-29T15:30:45Z"
}
Error Handling

{
  "success": false,
  "error": {
    "code": "CLIENT_NOT_FOUND",
    "message": "Client with ID 123 not found",
    "details": "..."
  },
  "timestamp": "2023-04-29T15:30:45Z"
}
Pagination Pattern
GET /api/clients?page=0&size=20&sort=lastName,asc
Response includes metadata:


{
  "data": [...],
  "pagination": {
    "page": 0,
    "size": 20,
    "totalElements": 235,
    "totalPages": 12
  }
}
```


- Staging environment: Automatic deployment on main branch
- Production: Manual approval required
- Contribution Guidelines
- Branching Strategy

- ``main:`` Production-ready code
- ``develop:`` Integration branch
- ``Feature branches:`` feature/feature-name
- ``Hotfix branches:`` hotfix/issue-description

### Pull Request Process

- Create PR against develop branch
- Require at least one code review
- All tests must pass
- Follow the PR template
- Coding Standards

- Follow ESLint configuration
- Write unit tests for new features
- Update documentation
- Commit Message Format
``
feat(client): add client search by program enrollment
``
- Implemented advanced filtering by program
- Added pagination controls
- Updated unit tests

Resolves: #123