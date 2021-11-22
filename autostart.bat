@ECHO OFF
python "source\backend\manage.py" makemigrations
python "source\backend\manage.py" migrate
ECHO "Migrate succefull"

start python "source\backend\manage.py" runserver
echo "Backend server is running"
start npm start --prefix "source\frontend"
echo "Frontend server is running"
PAUSE
