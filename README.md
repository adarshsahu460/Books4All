-- For running it on windows with WSL : 
    wsl -d Ubuntu
>> ls -l /mnt/d/Projects/Books4All/backend/auth      
>> ls -l /mnt/d/Projects/Books4All/backend/middleware

-- Always remember to chain the run code for prisma based servers:
    - CMD npx prisma generate && node index.js

-- Testing it locally : 
    - docker compose up -d
