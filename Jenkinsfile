pipeline {
    agent {
        docker {
            image 'ubuntu:20.04'
            args '-u root' // run as root to install packages
        }
    }

    environment {
        BUILD_DIR = "/var/www/html"
    }

    stages {
        stage('Install Apache') {
            steps {
                sh '''
                apt-get update
                apt-get install -y apache2
                mkdir -p $BUILD_DIR
                '''
            }
        }

        stage('Build Code') {
            steps {
                // Replace this with your actual build command
                sh 'echo "<h1>Website Deployed from ${BRANCH_NAME}</h1>" > $BUILD_DIR/index.html'
            }
        }

        stage('Publish to Web Server') {
            when {
                branch 'master'
            }
            steps {
                sh '''
                cp -r $BUILD_DIR/* /var/www/html/
                apachectl start
                echo "Site is now live on port 82"
                '''
            }
        }
    }
}
