npm run build
ssh root@202.182.116.51 "rm -rf /opt/javaweb/vue/myweb/*"
scp -r ../dist/* root@202.182.116.51:/opt/javaweb/vue/myweb/

