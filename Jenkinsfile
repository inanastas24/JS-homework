pipeline {
    agent any

    environment {
        REPORT_DIR = "reports"
        REPORT_FILE = "report.html"
    }

    stages {
        stage('Install Newman') {
            steps {
                sh 'npm install newman newman-reporter-html || true'
            }
        }

        stage('Run Newman Tests') {
            steps {
                sh '''
                    echo "==> Creating reports directory"
                    mkdir -p ${REPORT_DIR}

                    echo "==> Running newman tests"
                    newman run INZERAnastasiiaHW15.1.postman_collection.json \
                      -d MOCK_DATA.json \
                      --reporters cli,html \
                      --reporter-html-export ${REPORT_DIR}/${REPORT_FILE} || true

                    echo "==> Checking report output"
                    ls -la ${REPORT_DIR}
                '''
            }
        }
    }

    post {
        always {
            script {
                if (fileExists("${REPORT_DIR}/${REPORT_FILE}")) {
                    echo "✅ Found HTML report, publishing..."
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: "${REPORT_DIR}",
                        reportFiles: "${REPORT_FILE}",
                        reportName: "Anastasiia Inzer: API qauto report"
                    ])
                } else {
                    echo "⚠️ report.html not found in ${REPORT_DIR} — skipping HTML publishing"
                }
            }
        }
    }
}
