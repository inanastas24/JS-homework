pipeline {
    agent any
    stages {
        stage('Run Tests') {
            steps {
                sh '''
                    cd $WORKSPACE
                    ls -la
                    newman run "INZERAnastasiiaHW15.1.postman_collection.json" \
                    --environment "MOCK_DATA.json"
                '''
            }
        }
    }
}