#!/bin/sh
echo "Modifying appsettings from env"
google_oidp_clientid=$(printenv "GOOGLE_CLIENTID")
echo "Google client id is: ${google_oidp_clientid}"
sed -i "s|<<<your-client-id>>>.apps.googleusercontent.com|${google_oidp_clientid}|g" /usr/share/nginx/html/assets/appsettings.json
echo "replaced value 'GoogleSSO:ClientId' in appsettings.json with ${google_oidp_clientid}"
api_url=$(printenv "API_URL")
echo "Api url is: ${api_url}"
sed -i "s|<<<api_url>>>|${api_url}|g" /usr/share/nginx/html/assets/appsettings.json
echo "Finished modifying appsettings from env"