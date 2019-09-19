// CODE here for your Lambda Classes


//Person Class Goes Here
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender; 
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
 }
 
 //Instructor Class Goes Here
 class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favlanguage = instructorOptions.favlanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
 }   //Instructor
 
 //Student Class Goes Here
 class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`; //?
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun spring challenge on ${subject}`;
    }
 }   //Student
 
 //ProjectManager Class Goes Here
 class ProjectManager extends Instructor {
    constructor(PmOptions) {
        super(PmOptions);
        this.gradClassName = PmOptions.gradClassName;
        this.favInstructor = PmOptions.className;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
 }// PM
 
 // Objects Go Here
 const Kristian = new Person ({
    "name": 'Kristian',
    "age": 33,
    "location":'California',
    "gender": "F",
 });
 const Michael = new Person({
    "name": 'Michael',
    "age": 24,
    "location": 'California',
    "gender": "M",
 });
 const Myco = new Person({
    "name": 'Myco',
    "age": 25,
    "location": 'Florida',
    "gender": "F",
 });
 
 const Britt = new Instructor({
    "name": 'Britt',
    "age": 31,
    "location": 'Canada',
    "gender": "F",
    "specialty": 'Web DEv',
    "favLanguage": 'JavaScript',
    "catchPhrase": 'okay, lets see!',
 });
 const Emily = new Instructor({
    "name": 'Emily',
    "age": 25,
    "location": 'Texas',
    "gender": "F",
    "specialty": 'React',
    "favLanguage": 'French',
    "catchPhrase": 'Lets do this!',
 });

 const Maddy = new Student({
    "name": 'Maddy',
    "age": 30,
    "location": 'USA',
    "gender": "F",
     "previousBackground": 'Nurse',
    "className": 'Web24',
    "favSubjects": 'computer software',
 });
 
 const Hakeem = new Student({
    "name": 'Hakeem',
    "age": 30,
    "location": 'USA',
    "gender": "M",
    "previousBackground": 'Best Buy Manager',
    "className": 'Web24',
    "favSubjects": 'PE',
 });
 
 const Rebecca = new ProjectManager({
    "name": 'Rebecca',
    "age": 30,
    "location": 'Seaside',
    "gender": 'F',
    "specialty": 'Korean',
    "favLanguage": 'Arabic',
    "catchPhrase": 'so guys...',
    "gradClassName": '2020',
    "favInstructor": 'Sun Hosenim',
 });
 const Brandon = new ProjectManager({
    "name": 'Brandon',
    "age": 29,
    "location": 'Monterey',
    "gender": 'M',
    "specialty": 'Python',
    "favLanguage": 'Latin',
    "catchPhrase": 'Hey Hey, listen!',
    "gradClassName": 'DS8',
    "favInstructor": 'himself',
 });

 console.log(Kristian.name); //?
 console.log(Kristian.speak());

 console.log(Emily.grade(Kristian,'JavaScript'));
 console.log(Emily.grade(Michael,'JavaScript'));
 
 console.log(Maddy.listsSubjects());
 console.log(Hakeem.PRAssignment(Kristian, 'JavaScript'));
 console.log(Maddy.sprintChallenge(Maddy, 'JavaScript'));
 
 console.log(Rebecca.gradClassName);
 console.log(Rebecca.standUp('Brandon', 'Web24'));
 console.log(Brandon.debugsCode('Brandon','Rebecca','Classes'));