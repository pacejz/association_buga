//Appel des models, pour l'insant les modeles sont direct dans les factory

app.factory('Articles', function () {
    var factory2 = {
        articles: false,
        get: function () {
            return factory2.articles;
        }
    };

    var factory = {
        articles: [
            {
                id: 1,
                authorName: "Pacejz",
                title: "Yo Man",
                img: "/img/articles/lago.jpg",
                date: "15/12/2015",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
                id: 2,
                authorName: "ZeZen",
                title: "Yo Woman",
                img: "/img/articles/colombia_wc.jpg",
                date: "15/12/2015",
                content: "lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
                id: 3,
                authorName: "ZeZen",
                title: "Yo Jesus",
                img: "/img/articles/breizh_cola.jpeg",
                date: "15/12/2015",
                content: "lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                    "sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim" +
                    "ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
                    "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }],
        get: function () {
            return factory.articles;
        }

    };

    return factory;
});