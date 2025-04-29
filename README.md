# HealthSync

A comprehensive web-based system for healthcare providers to manage client information, program enrollment, and health outcomes tracking.
---

See the [User Manual](./documentations/UserManual.md) To get Started with HealthSync.

## 📌 Purpose

The **HealthSync** enables healthcare organizations to efficiently manage client records, health program enrollments, and generate analytical reports for better decision-making and improved health outcomes.

---

## 🚀 Key Features

- **Client Management**: Register, search, and view detailed client information  
- **Program Management**: Create and manage health programs with customizable parameters  
- **Enrollment Workflows**: Streamlined process for enrolling clients in health programs  
- **Reports & Analytics**: Visual dashboards with key health metrics and program outcomes  
- **User Management**: Role-based access control for healthcare staff  
- **API Integration**: REST API for integration with other health systems  

---

## 🛠 Technologies Used

### Frontend  
- **React** + **TypeScript**  
- **Vite** build tool  
- **Tailwind CSS** + **shadcn/ui** components  
- **React Router** for navigation  
- **React Query** for server state management  
- **Recharts** for data visualization  

### Backend  
- **Java Spring Boot**  
- **MySQL** database  
- **Spring Security** with JWT authentication  
- **Spring Data JPA**  
- **OpenAPI / Swagger** for API documentation  

---

## ⚙️ Setup Instructions

See the [Developer Guide](./documentations/DeveloperGuide.md) for detailed setup and configuration.

### Quick Start

#### Frontend

```bash
npm install  
npm run dev
```
#### Backend
```bash
mvn clean install  
mvn spring-boot:run
```

## Project Structure
```
health-information-system/
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Page layout components
│   ├── pages/              # Main application views
│   │   ├── auth/           # Authentication pages
│   │   ├── clients/        # Client management
│   │   ├── dashboard/      # Dashboard and overview
│   │   ├── programs/       # Program management
│   │   ├── reports/        # Reports and analytics
│   │   └── settings/       # System settings
│   ├── routes/             # Route definitions
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── server/                 # Backend source code
│   ├── src/main/java/
│   │   └── com/health/his/
│   │       ├── config/     # Application configuration
│   │       ├── controller/ # REST API controllers
│   │       ├── dto/        # Data Transfer Objects
│   │       ├── model/      # Entity models
│   │       ├── repository/ # Data access layer
│   │       └── service/    # Business logic
│   └── src/main/resources/ # Configuration files (e.g., application.properties)
├── docs/                   # Documentation (Developer Guide, User Manual, etc.)
├── README.md               # Project Overview
└── LICENSE                 # License Information
```

# Support or Contribution

Want to contribute? Great!

For any suggestions or contributions please do not hesitate to contact the owners of this repository.

Contributions to this project are welcomed by all, If you need to contribute 
please  contact us send your github profile to be allowed access.

 
  * Fork the repo
  * Create a new branch (git checkout -b improve-feature)
  * Make the appropriate changes in the files
  * Add changes to reflect the changes made
  * Commit your changes (git commit -am 'Improve feature')
  * Push to the branch (git push origin improve-feature)
  * Create a Pull Request

-Note when making contributions, please endeavour to follow good coding practice.

# Contact Me:

Below you will find my contact information:

WhatsApp; [+254702233145](https://wa.me/+254702233145/)

Call / Message; ++25470223314
E-mail; ronald.mololu@gmail.com

Fax; +1(001122698791)

# Others

LinkedIn - [Ronald Kipchirchir](https://www.linkedin.com/in/ronald-kipchirchir-034983246/)

Twitter - [@RonaahB](https://twitter.com/RonaahB)

[Go Back to the Top](https://github.com/McRonaah/HealthSync/)

# License

MIT License

Copyright (c) [2025] [Ronald Kipchirchir]