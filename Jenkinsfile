pipeline {
    agent {
        docker {
            image 'my-ubuntu-apache' // Or your DockerHub image
            args '-u root'
        }
    }

    environment {
        WEBSITE_DIR = '/var/www/html'
        PORT = '82'
    }

    stages {
        stage('Prepare') {
            steps {
                sh '''
                    apt-get update
                    apt-get install -y apache2 curl
                    rm -rf ${WEBSITE_DIR}/*
                '''
            }
        }

        stage('Build Code') {
            steps {
                sh '''
                    echo "Copying website files to ${WEBSITE_DIR}..."
                    cp -r * ${WEBSITE_DIR}/
                '''
            }
        }

        stage('Deploy if Master') {
            when {
                branch 'master'
            }
            steps {
                sh '''
                    echo "Deploying to port ${PORT}..."
                    sed -i "s/80/${PORT}/g" /etc/apache2/ports.conf
                    sed -i "s/80/${PORT}/g" /etc/apache2/sites-enabled/000-default.conf
                    apachectl start
                    echo "Website is live at http://localhost:${PORT}"
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline complete for ${env.BRANCH_NAME}"
        }
    }
}
