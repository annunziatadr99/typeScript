let myName: string = "dario ";
console.log(myName);
let mySurname: string = "Annunziata";
console.log(mySurname);
let age: number = 25;
console.log(age);

let myname2 = "ciao";

console.log(myname2.toUpperCase());

const sum = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(sum(20, 30));

const array: string[] = ["Giuseppe", "dario"];
console.log(array);

const array2: (string | number | boolean)[] = ["francesco", 34, true];
console.log(array2);

const obj = {
  firstStep: "name",
  secondStep: 59,
  thirdtStep: true,
};
console.log(obj);

interface Myobj {
  name: string;
  age: number;
  //candrive: boolean;
  candrive?: boolean;
}
const obj2: Myobj = {
  name: "dario",
  age: 25,
  candrive: true,
};
console.log(obj2);

const student: Myobj = {
  name: "Max",
  age: 28,
  candrive: false,
};
console.log(student);

const student2: Myobj = {
  name: "Max",
  age: 28,
};
console.log(student2);

const sayHello2 = () => {
  return "hello TypeScript";
};

console.log(sayHello2().slice(0, 2));

const additionWithChecks2 = (n3, n4) => {
  if (typeof n3 === "number" && typeof n4 === "number") {
    return n3 + n4;
  } else {
    return "vedi di passare dei parametri numerici";
  }
};

console.log(additionWithChecks2("3", "2"));
console.log(additionWithChecks2(3, 2));

type Teacher1 = {
  role: string;
  yearsOfExp?: number;
  active: boolean;
  isLiveNow: boolean;
  isRemote: boolean;
};
type Person1 = {
  name: string;
  surname: string;
  age: number;
  height?: number;
};
const teacher3: Person1 & Teacher1 = {
  name: "Stefano",
  surname: "Miceli",
  age: 34,
  role: "frontend teacher",
  active: true,
  isLiveNow: true,
  isRemote: true,
};
console.log(teacher3);
// rubrica utile per dubbi
// assicurarsi di aver installato typescript con:
// npm i -g typescript
// assicurarsi che risponda correttamente ad una richiesta di versione (vorrà dire che è installato correttamente)
// tsc -v
// risponde con il numero di versione

console.log("Hello World");

// Type Inference (inferenza del tipo)
let myName = "Stefano";
console.log(myName);

let mySurname = "Miceli";
console.log(mySurname);

let myVar: number; // abbiamo assegnato un tipo number al contenitore myVar che altrimenti avrebbe ricevuto il tipo "any" (da evitare)
// l'assegnazione manuale del tipo ha senso farla SOLO quando TypeScript non può inferire il tipo in base al valore utilizzato o al contesto

// myVar = "Epicode" // type "string" is not assignable to type "number"
myVar = 0; // corretto

console.log(myVar.toString()); // TS mi ha suggerito un metodo valido per il tipo di dato contenuto nella variabile myVar
console.log(myName.toLowerCase());
console.log(mySurname.concat("!"));
mySurname.startsWith("Mi"); // metodo più recente, funziona solo se si imposta una tsconfig.json e si assegna un target lib superiore
// per creare la tsconfig.json scrivi nel terminale ==> tsc --init
// da questo momento dovrai usare tsc senza nome di file
// tsc -w

// quali sono i tipi disponibili?

// TIPI PRIMITIVI

// string
// number
// boolean
// null
// undefined

// tipi particolari

// any - ⚠️ da evitare come la peste (se capita, bisogna cercare il modo di modificarlo più presto possibile)
// never - un tipo che verrà assegnato in automatico in determinate situazioni di valori ancora inesistenti, è un tipo che non avrà mai un tipo
// unknown - un tipo simile ad any, ma che può cambiare accezione in base al suo contesto di utilizzo
// void - indica per esempio una funzione che non ha mai avuto un return

// tipi strutturali

// Object
// Array
// Function

// FUNZIONI
const sayHello = () => {
  return "hello TypeScript";
};

console.log(sayHello().slice(0, 3));

const additionWithChecks = (n1, n2) => {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return "vedi di passare dei parametri numerici";
  }
};

console.log(additionWithChecks("3", "2"));
console.log(additionWithChecks(3, 2));

const additionWithTS = (number1: number, number2: number): string => {
  return (number1 + number2).toString(); // per inferenza capirà che la funzione accetta solo due numeri in ingresso, ma dovrà ritornare PER FORZA una stringa
};

// il tipo di questa funzione è (n1: number, n2: number) => string

additionWithTS(1, 2);
// in TypeScript è buona prassi andare a definire il tipo dei parametri, altrimenti rimarrebbero con il tipo "any".
// la maggior parte delle volte il tipo di dato in uscita dalla funzione viene inferito in automatico, non occorre specificarlo.
// solo quando avremo esigenze particolari allora potremmo forzarlo in modo da creare una funzione in cui entrino numeri ed escano stringhe per forza

// TYPE UNION - unione di due o più tipi assegnabili ad un qualche contenitore di valore

let whatever: string | boolean;

if (4 < 8) {
  whatever = "stefano";
  whatever.slice(0, 2);
} else {
  whatever = false;
}

// quando usiamo la type union (vedi sopra), TS diventa molto più stringente sulle operazioni che ci sono permesse con un certo dato
console.log(whatever);
// whatever.slice(0, 2); // in questo contesto whatever è ancora ambiguo, di conseguenza non ci lascia usare .slice() fino a che non specifichiamo il suo corretto utilizzo

// dovremo specificare l'utilizzo che ne faremo

// noi sapevamo che per via del controllo 4<8 avremmo sempre avuto true nella condizione, ma TS non è abbastanza "intelligente" per capirlo a priori, ma solo in un secondo momento
if (typeof whatever === "string") {
  whatever.slice(0, 2);
}

// possiamo invece rassicurarlo utilizzando la variabile whatever in un contesto di controllo usando typeof oppure usando la funzionalità del "type casting" (as)
// che converte il tipo associato alla variabile che di conseguenza ci permette il suo utilizzo con metodi associati a valori di tipo noto
(whatever as string).slice(0, 3);

// il tipo unknown - è l'unico "flessibile", può venire associato e poi cambiare in quello associabile al contesto d'uso che ne viene fatto

let maybe: unknown;

if (maybe === true) {
  const myBoolean = maybe;
}

if (maybe === "una stringa") {
  const myString = maybe;
}

// CUSTOM TYPE (o TYPE ALIAS) - è un contenitore di tipi composti

type StringOrNumber = string | number;

let whatever2: StringOrNumber; // assegnazione di tipo composto derivante da Type Alias

const mixedParams = (par1: StringOrNumber, par2: string | number) => {
  if (typeof par1 === "number" && typeof par2 === "number") {
    return par1 + par2;
  } else {
    return (par1 as string) + (par2 as string);
  }
};

console.log(mixedParams(2, 2));
console.log(mixedParams("1", "2"));

// ARRAY

const myAnyArray = [];
myAnyArray.push(2);
myAnyArray.push("1");
// qualunque valore è permesso, non troppo utile nel contesto TS

const myArray: number[] = [];
// myArray.push("1");
myArray.push(1);
myArray.push(2);
myArray.push(3);
// myArray.push(true);

myArray.forEach((n) => n.toFixed(1)); // n è inteso come tipo numerico, gli viene inferito dal fatto che è già a conoscenza
// dell'unico tipo accettato da myArray, ovvero number. quindi n: number

const myArray2: string[] = [];
// myArray2.push(1);

myArray2.push("1");
myArray2.push("2");
myArray2.push("3");

myArray2.forEach((n) => n.concat("!"));

const myArray3: (string | number)[] = [];
myArray3.push(0);
myArray3.push(1);

myArray3.push("1");
myArray3.push("2");
myArray3.push("3");

myArray3.forEach((n) => n.toString());

const myArray4: (string | undefined)[] = [];
myArray4.push("0");
myArray4.push(undefined);

myArray4.forEach((n) => n?.trim()); // questo punto di domanda si riferisce ad un "optional chaining"
// ci permette di verificare l'esistenza dell'elemento, che non dovrà essere undefined, prima di utilizzare il metodo .trim()

// TUPLA - tupla è una sorta di array con posizioni specifiche con tipi specifici associati a quelle posizioni
const myTuple: [number, string] = [0, "1"];
// le tuple ci danno valori precisi in ogni posizione, quindi al posto di usarle con dei cicli, è più facile trovarle usate con una destrutturazione
// che ci permette di associare ad ogni valore una variabile
const [primoNumero, secondaStringa] = myTuple;

console.log("PRIMO", primoNumero);
console.log("SECONDO", secondaStringa);

const myTuple2: [number, string, boolean] = [0, "1", true];

myTuple2[0].toFixed(1); // TS sa riconoscere il tipo in ogni posizione che stiamo leggendo e ci suggerirà i metodi più consoni in automatico
myTuple2[1].concat("?");
myTuple2[2].valueOf();

// OGGETTI
// dichiarare un oggetto dentro una variabile, come per altri dati, farà inferire il "tipo oggetto" in automatico

type MyObj = {
  coords: {
    lat: number;
    lon: number;
  };
  name: string;
};

const obj: MyObj = {
  coords: { lat: 12.01298, lon: 19.0289182 },
  name: "test",
  // surname: "test1" // non posso usare proprietà non definite nel tipo
};

// usiamo Type Alias riferiti ad oggetti quando vogliamo mantenere solidità nel contenuto di una variabile contenente un oggetto

type Person = {
  name: string;
  surname: string;
  age: number;
  height?: number;
};
// il ? rende una proprietà di un Type Alias facoltativa

const person: Person = {
  name: "Stefano",
  surname: "Miceli",
  age: 34,
  height: 180,
};

const person2: Person = {
  name: "Stefano",
  surname: "Casasola",
  age: 35,
  // qui ho potuto non utilizzare la height perché l'avevo definita come facoltativa
};

// possiamo estendere i nostri tipi con le unioni di tipo

type Teacher = {
  role: string;
  yearsOfExp?: number;
  active: boolean;
  isLiveNow: boolean;
  isRemote: boolean;
};

const teacher: Person & Teacher = {
  name: "Stefano",
  surname: "Miceli",
  age: 34,
  role: "frontend teacher",
  active: true,
  isLiveNow: true,
  isRemote: true,
};
const teacher2: Person & Teacher = {
  name: "Stefano",
  surname: "Casasola",
  age: 35,
  role: "frontend teacher",
  active: true,
  isLiveNow: true,
  isRemote: true,
  yearsOfExp: 5, // questa è facoltativa, ma potevamo anche non specificarla
};

// a questo punto possiamo applicare un . dopo il nome di un oggetto e vederci suggerire tutte le proprietà disponibili in un oggetto fatto con quel tipo particolare
teacher2.age.toFixed(1);
teacher2.name.length;

// INTERFACES - come per i Type Alias sono contenitori di definizione di tipi per gli oggetti con funzionalità di estensione

interface HumanBeing {
  name: string;
  surname: string;
  numberOfEyes: number;
  numberOfLimbs?: number;
  height: number | string;
  hairColor: string;
}

const person3: HumanBeing = {
  name: "Antonio",
  surname: "Frizzi",
  numberOfEyes: 2,
  height: 170,
  hairColor: "brown",
};

interface EpicodeStudent extends HumanBeing {
  batchCode: string;
  hasWebcam: boolean;
  preferredTopic?:
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "SASS"
    | "Bootstrap"
    | "React"
    | "Redux"
    | "TypeScript";
}

const student4: EpicodeStudent = {
  batchCode: "FS0824B",
  hasWebcam: true,
  name: "Davide",
  surname: "De Pasquale",
  numberOfEyes: 2,
  numberOfLimbs: 4,
  height: 180,
  hairColor: "light-brown",
  preferredTopic: "JavaScript",
};

const student21: EpicodeStudent = {
  batchCode: "FS0824B",
  hasWebcam: true,
  name: "Alessandro",
  surname: "Coretti",
  numberOfEyes: 2,
  numberOfLimbs: 4,
  height: 180,
  hairColor: "black",
  preferredTopic: "CSS",
};

const student3: EpicodeStudent = {
  batchCode: "FS0824B",
  hasWebcam: true,
  name: "Davide",
  surname: "Alonzi",
  numberOfEyes: 1,
  numberOfLimbs: 2,
  height: 180,
  hairColor: "transparent",
  preferredTopic: "JavaScript",
};

const arrOfStudents: EpicodeStudent[] = [];

// arrOfStudents.push({name: "Stefano"})
arrOfStudents.push(student);
arrOfStudents.push(student2);
arrOfStudents.push(student3);

console.log(arrOfStudents);
arrOfStudents.forEach((stud) => console.log(stud.surname));
const arrOfStudNames = arrOfStudents.map((stud) => stud.numberOfEyes);

// GENERICS
// sono "parametri di tipo" per un'interfaccia

// permette di non forzare a priori il tipo di un dato all'interno dell'interfaccia
// permette di decidere il tipo da associare nel momento dell'utilizzo di quell'interfaccia

interface Topic {
  weeklyTopics: string[];
}

interface EpicodeUnit<T, A> {
  name: string;
  // assignedTeacher: string | string[];
  assignedTeacher: A;
  // topic: string | string[] | Topic[];
  topic: T;
}

const U1: EpicodeUnit<string[], string> = {
  name: "Unit1",
  assignedTeacher: "Stefano",
  topic: ["HTML", "CSS", "JS"],
};

const U2: EpicodeUnit<string[], string[]> = {
  name: "Unit2",
  assignedTeacher: ["Stefano Miceli", "Stefano Casasola"],
  topic: ["CSS ADV", "Bootstrap", "SASS"],
};

const U3: EpicodeUnit<Topic[], string> = {
  name: "Unit3",
  assignedTeacher: "Stefano Miceli",
  topic: [
    {
      weeklyTopics: ["React Intro", "State", "Props"],
    },
    {
      weeklyTopics: [
        "React Intermediate",
        "Lifecycle Methods",
        "Router",
        "Testing",
      ],
    },
    {
      weeklyTopics: ["Redux", "TypeScript", "TS React"],
    },
  ],
};
