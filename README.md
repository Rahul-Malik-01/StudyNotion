# StudyNotion React Project with ExpressJs (Backend) & MongoDB (DataBase)

This is StudyNotion React project with Tailwind CSS configured. It uses React version **18.2** and Tailwind CSS version **3.2**.

## Usage

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Rahul-Malik-01/StudyNotion.git
    ```

1. Install the required packages.
    ```sh
    npm install //in root folder and server folder
    ```

1. Start the development server.
    ```sh
    npm run dev
    ```

1. Add .env file in server with Following configs
    
    MAIL_HOST = smtp.gmail.com
    
    MAIL_USER = m********@gmail.com
    
    MAIL_PASS = *********stcbeh   // create with two-step verification in your maail

    JWT_SECRET = "studynotion"
    
    FOLDER_NAME = "StudyNotion"

    RAZORPAY_KEY = rzp_test_xOjq9T********   // razorpay api key
    
    RAZORPAY_SECRET = 6J8QOHrMZpeYx***********

    CLOUD_NAME = dm*******y
    
    API_KEY = 496395********4
    
    API_SECRET = cmtUeew-KDugUF_l**********A

    MONGODB_URL = "mongodb+srv://rahul***********:************7W3Q@cluster0.rfwohlw.mongodb.net/studyNotionDatabase"    // database url create at MongoDB atlas
    
    PORT = 4000
    
    
1. Add .env file in Root / React app Folder with Following config

    REACT_APP_BASE_URL = "http://localhost:4000/api/v1"  // localhost url to connect server with react-app
    
1. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
1. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.
