pipeline {
    agent any

    tools {
        nodejs 'NodeJS 14.x' // Use the NodeJS configuration from Jenkins
    }

    environment {
        CI = 'true'
    }

     triggers {
        pollSCM('* * * * *')  // Fallback polling
        // OR for GitHub webhooks:
        githubPush()
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/blessador/simple-nodejs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy script or commands can be added here
                    sh 'echo Deploying the application...'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
