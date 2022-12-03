function loginUser(login, senha) {
    let x = document.getElementById("user");
    sessionStorage.setItem('user', x.value)
    window.location.href = "./emAlta/index.html";
}
function log() {
    console.log("session\n" + sessionStorage)
    console.log("local\n" + localStorage.getItem('db'))
    console.log("stack\n" + db)
}
function clear() {
    localStorage.clear()
    sessionStorage.clear()
    db = null;
}
function load() {
    db = localStorage.getItem('db')
    if (!db) {
        db = db_default
        localStorage.setItem('db', JSON.stringify(db))
    }
}
// ========== DB

const db_default = {
    times: [
        {
            id: 1,
            nome: "ABC do sul",
            esporte: "futebol",
            integrantes: [
                "paulo otavio",
                "mario nascimento",
                "armado golpe",
                "jose da silva",
            ],
        },
        {
            id: 2,
            nome: "DEF do leste",
            esporte: "volei",
            integrantes: [
                "pedro 123 de oliveira 4",
                "mario do armario",
                "armado nascimento",
                "jose da silva",
            ],
        },
        {
            id: 3,
            nome: "UND do araguari",
            esporte: "chádreis",
            integrantes: [
                "pedro 123 de oliveira 4",
                "mario do armario",
                "armado nascimento",
                "jose da silva",
            ],
        },
    ],
    matches: [
        {
            id: 1,
            name: "partida teste",
            hostId: 1,
            guestId: 2,
            date: "10/10/2022",
            time: "16:30",
            placeId: 1,
            resultado: "vitoria do time xxx",
            placar: "4x3"
        },
        {
            id: 2,
            name: "partida teste",
            hostId: 1,
            guestId: 2,
            date: "10/10/2022",
            time: "16:30",
            placeId: 1,
            resultado: "vitoria do time xxx",
            placar: "4x3"
        },
        {
            id: 3,
            name: "partida teste",
            hostId: 1,
            guestId: 2,
            date: "10/10/2022",
            time: "16:30",
            placeId: 1,
            resultado: "vitoria do time xxx",
            placar: "4x3"
        },
        {
            id: 4,
            name: "partida teste",
            hostId: 1,
            guestId: 2,
            date: "10/10/2022",
            time: "16:30",
            placeId: 1,
            resultado: "vitoria do time xxx",
            placar: "4x3"
        },
    ],
    places: [
        {
            id: 1,
            name: "Arena Pampulha",
            address: "Av. Heráclito Mourão de Miranda, 3895 - Bandeirantes, Belo Horizonte",
            sportId: 1,
            descricao: "Quadras society e fut 7 totalmente cobertas",
            imagem: "../assets/quadra.png"
        },
        {
            id: 2,
            name: "Pé na areia",
            address: "R. Luz, 126 - Serra, Belo Horizonte",
            sportId: 2,
            descricao: "Alugueis de quadras para 🎾 Beach Tennis",
            imagem: "../assets/quadra.png"
        },
        {
            id: 3,
            name: "Quadra Orion Esporte Clube",
            address: "R. Padre Eustáquio, 1489 - Carlos Prates, Belo Horizonte",
            sportId: 4,
            descricao: "38 mestros de comprimento e 18 de largura",
            imagem: "../assets/quadra.png"
        },
        {
            id: 4,
            name: "Quadra De Esportes",
            address: "Praça Louis Braille, 106-168 - Saudade, Belo Horizonte",
            sportId: 5,
            descricao: "Quadra poliesportiva",
            imagem: "../assets/quadra.png"
        },
    ],
    users: [
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" },
        { id: 3, name: "user 4" }
    ],
    sports: [
        { id: 1, name: "Futebol" },
        { id: 2, name: "Beach Tennis" },
        { id: 3, name: "Volei" },
        { id: 4, name: "Fusal" },
        { id: 5, name: "Basquete" },
    ]
}