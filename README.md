# RoboForm

> A robotics-focused community site

## Running locally frontend

### Install pnpm
  >
  > Note: you will only need to install pnpm once

  ```sh
    npm install --global pnpm@latest-10
  ```

### Switch to the frontend code

```sh
    cd ros2-tutorials
```

### Install the necessary dependencies via pnpm

```
pnpm install
```

### Start the development server with auto-reloading and an instant preview

```
pnpm dev
```

### Helpful Docs & Learning Materials

Here are some resources to help you get started with the tools used in this monorepo:

- [PNPM](https://pnpm.io) – Workspaces, install, build, and scripts
- [pnpm CLI Reference](https://pnpm.io/cli)
- [Vite](https://vite.dev/guide/) – build tool that aims to provide a faster and leaner development experience for modern web projects

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Running locally Django backend

> This guide explains how to set up and run the Django backend for the project.

### Switch to the backend code and make sure python is installed

```sh
    cd robotics_backend/robotics_website
```

### Create a Virtual Environment

It’s best practice to use a virtual environment for dependencies.

```sh
python -m venv venv
# or 
python3 -m venv venv
```

### Activate it

**Linux/MacOS**:

  ```sh
  source venv/bin/activate
  ```

**Windows (PowerShell)**:

```sh
  venv\Scripts\activate
```

### Install Dependencies

- Install the required Python packages from requirements.txt:

```sh
  pip install -r requirements.txt
```

### Run Database Migrations

- Create the necessary tables in the SQLite database:

```sh
  python manage.py migrate
```

- Database Permissions
  - Once the above command succeed it will create a `db.sqlite3` file, Make sure it has write access.
  - For local development, you can allow all users to read, write  and execute (:warning: use with caution):

      ```sh
       chmod 777 db.sqlite3
      ```

- (Optional) Inspect the Database
You can use SQLite Studio or any SQLite browser to open db.sqlite3.
Manually insert some test data into the robotics_blogpost table if needed.

### Start the Development Server

- Run the Django backend:

```sh
  python manage.py runserver
```

- By default, the server runs at: `http://127.0.0.1:8000/`

### Test the Blog API
>
> Open in your browser or API client:

- <http://127.0.0.1:8000/api/blog/>
- <http://127.0.0.1:8000/api/blog/:id>
- You should see the blog data you inserted

### Integration with Frontend

- If both the backend and frontend are running, navigate to the frontend UI.
- The blogs section should display the data served from the Django API.
