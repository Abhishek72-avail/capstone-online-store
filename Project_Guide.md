# Capstone Online Store Project

A comprehensive e-commerce web application built with modern technologies and deployed using containerization and Kubernetes orchestration.

## 🚀 Project Overview

This capstone project demonstrates a full-stack online store application with complete CI/CD pipeline implementation, from local development to production-ready Kubernetes deployment.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Docker Containerization](#docker-containerization)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## 🛠 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**
- **Docker Desktop**
- **Minikube**
- **kubectl**

## 💻 Local Development Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd capstone-online-store
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the environment variables as needed for your local setup.

### 4. Run the Application Locally

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### 5. Verify Local Setup

Open your browser and navigate to `http://localhost:3000` to ensure the application is running correctly.

## 🐳 Docker Containerization

### 1. Build Docker Image

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### 2. Build the Docker Image

```bash
docker build -t capstone-online-store .
```

### 3. Test Docker Image Locally

```bash
docker run -p 3000:3000 capstone-online-store
```

### 4. Optimize Image Size

To reduce the Docker image size, use multi-stage builds and .dockerignore:

Create `.dockerignore`:
```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.nyc_output
```

### 5. Push to Docker Hub

```bash
# Tag the image
docker tag capstone-online-store <your-dockerhub-username>/capstone-online-store:latest

# Login to Docker Hub
docker login

# Push the image
docker push <your-dockerhub-username>/capstone-online-store:latest
```

## ☸️ Kubernetes Deployment

### 1. Start Minikube

```bash
minikube start
```

### 2. Create Kubernetes Deployment

Create `k8s/deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: capstone-online-store-deployment
  labels:
    app: capstone-online-store
spec:
  replicas: 3
  selector:
    matchLabels:
      app: capstone-online-store
  template:
    metadata:
      labels:
        app: capstone-online-store
    spec:
      containers:
      - name: capstone-online-store
        image: <your-dockerhub-username>/capstone-online-store:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
```

### 3. Create Kubernetes Service

Create `k8s/service.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: capstone-online-store-service
spec:
  selector:
    app: capstone-online-store
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```

### 4. Deploy to Kubernetes

```bash
# Apply deployment
kubectl apply -f k8s/deployment.yaml

# Apply service
kubectl apply -f k8s/service.yaml
```

### 5. Verify Deployment

```bash
# Check pods
kubectl get pods

# Check services
kubectl get services

# Check deployment status
kubectl get deployments
```

### 6. Access the Application

```bash
# Port forward to access the application
kubectl port-forward service/capstone-online-store-service 3000:80
```

The application will be accessible at `http://localhost:3000`

### 7. Alternative: Using Minikube Service

```bash
minikube service capstone-online-store-service
```

## 📁 Project Structure

```
capstone-online-store/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── public/
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── Dockerfile
├── .dockerignore
├── package.json
├── README.md
└── .env.example
```

## 🛡️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Development Tools**: Minikube, kubectl
- **Version Control**: Git, GitHub
- **Container Registry**: Docker Hub

## 🔧 Useful Commands

### Docker Commands
```bash
# List Docker images
docker images

# List running containers
docker ps

# Remove image
docker rmi <image-id>

# Remove container
docker rm <container-id>
```

### Kubernetes Commands
```bash
# Get all resources
kubectl get all

# Describe pod
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>

# Delete deployment
kubectl delete deployment capstone-online-store-deployment

# Delete service
kubectl delete service capstone-online-store-service
```

### Minikube Commands
```bash
# Start minikube
minikube start

# Stop minikube
minikube stop

# Delete minikube cluster
minikube delete

# Get minikube IP
minikube ip

# Access minikube dashboard
minikube dashboard
```

## 🐛 Troubleshooting

### Common Issues and Solutions

1. **Port Already in Use**
   ```bash
   # Kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Docker Build Issues**
   ```bash
   # Clear Docker cache
   docker system prune -a
   ```

3. **Kubernetes Pod Not Starting**
   ```bash
   # Check pod logs
   kubectl logs <pod-name>
   # Describe pod for events
   kubectl describe pod <pod-name>
   ```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [GitHub Link](https://github.com/Abhishek72-avail)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/abhishek-prasad-918279242/)

## 🙏 Acknowledgments

- Thanks to all contributors who helped with this project
- Special thanks to the open-source community for the amazing tools and libraries

---

## 📊 Project Status

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![Kubernetes](https://img.shields.io/badge/kubernetes-deployed-success)

**Note**: Replace placeholder values like `<your-repository-url>`, `<your-dockerhub-username>`, and contact information with your actual details before using this README.
