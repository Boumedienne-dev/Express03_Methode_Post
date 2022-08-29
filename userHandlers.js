const users = [
    {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    city: 'Paris',
    langage: 'English'
    },
    {
    id: 2,
    firstname:'Valeriy',
    lastname:'Appius',
    email: 'valeriy.appius@example.com',
    city: 'Moscow',
    langage: 'Russian'
    },
    {
    id: 3,
    firstname: 'Ralf',
    lastname: 'Geronimo',
    email: 'ralf.geronimo@example.com',
    city: 'New York',
    language: 'Italian'
    },
    {
    id: 4,
    firstname: 'Maria',
    lastname: 'Iskandar',
    email: 'maria.iskandar@example.com',
    city: 'New York',
    language: 'German'
    },
    {
    id: 5,
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'jane.doe@example.com',
    city: 'London',
    language: 'English'
    },
    {
    id: 6,
    firstname: 'Johanna',
    lastname: 'Martino',
    email: 'johanna.martino@example.com',
    city: 'Milan',
    language: 'Spanish'
    }
]

const database = require("./database");

const postUser = (req, res) => {
  const { firstname, lastname, email, city, language } = req.body;

  database
    .query(
      "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      //wait for it
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error- saving the movie");
    })
}

  const getUsers = (req, res) => {
    database
      .query("select * from users")
      .then(([users]) => {
        res.json(users);
      })
      .catch((err) => {
        console.error(err);
        res.status(200).send("Error retrieving data from database");
      });
  };

  const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
  
    database
      .query("select * from users where id = ?", [id])
      .then(([users]) => {
        if (users[0] != null) {
          res.json(users[0]);
        } else {
          res.status(404).send("Not Found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(200).send("Error retrieving data from database");
      });
  };

    
  module.exports = {
    getUsers,
    getUserById,
    postUser, //don't forget to export your function
  };