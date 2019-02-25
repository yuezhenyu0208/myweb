npm run build
ssh root@52tt.xyz "rm -rf /opt/javaweb/vue/myweb/*"
scp -r ../dist/* root@52tt.xyz:/opt/javaweb/vue/myweb/

