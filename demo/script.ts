// console.log("In typescriupt file");
// let arr = [5, 4, 3, 23, 6, 76, 34, 98]
// let [a, ...myarr] = arr
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]
// let e = arr[4]
// let f = arr[5]
// let g = arr[6]
// let h = arr[7]
// console.log(a)
// console.log(myarr)


// class Employee {
//     //properties, method, constructor
//     private empid: number
//     private empname: String
//     private empaddress: String
//     public constructor(empid: number, empname: String, empaddress: String) {
//         this.empid = empid
//         this.empname = empname
//         this.empaddress = empaddress
//     }
//     public print(): void {
//         console.log(this.empid, this.empname, this.empaddress)
//     }
//     get getEmpId() {
//         return this.empid
//     }
//     set setEmpId(id) {
//         this.empid = id
//     }
// }
// class Regular extends Employee {
//     salary
//     constructor(empid, empname, empaddress, salary) {
//         super(empid, empname, empaddress)
//         this.salary = salary
//     }
//     //method overriding
//     public print(): void {
//         console.log(this.empid, this.empname, this.empaddress, this.salary)
//     }
// }
// let r1 = new Regular(105, 'dm105', 'pune105', 123);
// r1.print();
let skills = new Set()
skills.add('java')
skills.add('javascript')
skills.add('java')
skills.add('angular')
skills.add('java')
console.log(skills);

let capitals = new Map()
capitals.set('MH', 'mumbai')
capitals.set('GJ', 'GNR')
capitals.set('TL', 'HYD')
capitals.set('AP', 'HYD')
capitals.set('TN', 'chennai')
capitals.set('TN', 'chennai')
console.log(capitals);

let score: number[] = [1,2,3,4,5];
console.log(score);