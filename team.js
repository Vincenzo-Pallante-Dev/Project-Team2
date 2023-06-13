let students = [
    {name:"Antonio", surname:"Iannibelli", age:"22", city:"Napoli", hoppy:"Playng videogames", favoriteFood:"Pizza", favoriteVideoGame:"Call of duty", favoriteFilm: "Interstellar", favoriteBook:"", petName:"Dalì"},
    {name : 'Joele', surname : 'Esposito', age : '21', city : 'Massa', hobby : 'Guitar playing', favoriteFood : '', favoriteVideoGame : 'Ocarina of time', favoriteFilm : 'Taxi driver', favoriteBook : '', petName : '' },
    {name : "Vincenzo",surname : "Pallante",age : "28",city : "Verona",hobby : "Play the guitar",favoriteFood : "Pizza",favoriteVideoGame : "Call of Duty",favoriteFilm : "I'm legend",favoriteBook : "Undefined",petName : "Marley"}
];

let nomi =[];

for(i=0; i<students.length; i++){
    nomi[i]=students[i].name
}

let nomi2= nomi.sort();
console.log(nomi2);

let eta=[];

for(i=0; i<students.length; i++){
    eta[i]=students[i].age
}

let eta2= eta.sort();
console.log(eta2);

function getMiddleAge(students){
    let ageCount = 0;
    students.forEach(element => { 
        
        ageCount += Number(element.age);
        
    });

    let midAge = ageCount / students.length;

    console.log(midAge);
}

function hasPet(students){
    students.forEach(element => {
        if (element.petName){
            console.log(`${element.name} ${element.petName}`);
        } 
    })
}

// - Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name).
// - Stampa chi ha scritto "LOL" o "League Of Legends" come videogioco preferito. (nome).
function videoGioco(students){
    for(let i = 0; i< students.length; i++){
        if(students[i].favoriteVideoGame == "LOL" || students[i].favoriteVideoGame == "League of Legend")
        console.log(students[i].name);
    }
}
videoGioco(students);




// - Print if there are some members with the same name (name).
// - Stampa se ci sono alcuni membri con lo stesso nome (nome).

function name (x){
    let c = "Ci sono nomi uguali";
    let d = "Non ci sono nomi uguali"
    for(let i = 0; i < x.length; i++){
        let a = x[i].name
        for(let j = i + 1; j < x.length; j++){
            let b = x[j].name
            if(a == b){
                return c;
            }
        }
    }
    return d;
}
console.log(name(students));
