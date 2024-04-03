# Let'sConnect

Welcome to Let'sConnect, a user-friendly social media platform designed to facilitate easy connection and interaction among users. This project utilizes Next.js, NextAuth, Prisma, and MySQL to create a seamless and engaging social media experience.

[Let'sConnect Preview](https://letsconnect-social.vercel.app/dashboard)

## Features

- **User Authentication**: Utilizes NextAuth for secure authentication, allowing users to sign up, log in, and manage their accounts.
- **Profile Management**: Users can create and customize their profiles, including profile pictures, bio, and other relevant information.
- **Social Interactions**: Enables users to connect, follow/unfollow other users, and engage with posts through likes, comments, and shares.
- **Real-time Updates**: Utilizes WebSockets or similar technology to provide real-time updates on activities such as new followers, likes, and comments.
- **Search and Discovery**: Allows users to search for other users, posts, or topics of interest, facilitating easy discovery of relevant content.
- **Responsive Design**: Ensures optimal user experience across various devices and screen sizes.

## Technologies Used

- **Next.js**: React framework for building server-side rendered and statically generated web applications.
- **NextAuth**: Authentication library for Next.js applications, providing easy-to-use authentication flows.
- **Prisma**: Modern database toolkit for Node.js, enabling type-safe database access with auto-generated query builders.
- **MySQL**: Open-source relational database management system used for storing application data.

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/letsconnect.git
2. Install dependencies:
   cd letsconnect
   npm install
3. Set up MySQL database and configure Prisma connection in 'prisma/schema.prisma'.
4. Run migrations:
   npx prisma migrate dev --name init
5. Start the development server:
  npm run dev
  Open http://localhost:3000 to view the application in your browser.


## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License
This project is licensed under the MIT License.

## Acknowledgements
Special thanks to the creators and contributors of the technologies used in this project.
