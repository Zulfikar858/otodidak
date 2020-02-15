//1.Objek Literal
// Kekurangan : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Zulfikar',
//     energi:5000,
//      makan : function (porsi) {
//          this.energi = this.energi + porsi;
//          console.log(`Halo ${this.nama}, selamat makan!`);
//      }
// }
// let mahasiswa2 = {
//     nama: 'Jaki',
//     energi:5000,
//      makan : function (porsi) {
//          this.energi = this.energi + porsi;
//          console.log(`Halo ${this.nama}, selamat makan!`);
//      }
// }

//2.Function Declaration
// const  methodMahasiswa = { 
//     makan : function (porsi) {
//     this.energi += porsi;

//     console.log(`Halo ${this.nama} selamat makan`);
    
// },
//      main : function (jam){
//     this.energi -= jam;
//     console.log(`Halo ${this.nama} Selamat Bermain`);
// },
//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama} Selamat tidur`);
//     },
// };
// function Mahasiswa(nama, energi) {
//     let mahasiswa= Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
   

   
      
  
//     return mahasiswa;
// }


// let zulfikar = Mahasiswa('Zulfikar', 5000);
// let Jaki = Mahasiswa('Jaki',4500);





// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
   
// }

// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan`;
// }
// Mahasiswa.prototype.main = function (jam){
//     this.energi -= jam;
//     return `Halo ${this.nama} selamat bermain`;
// }
// Mahasiswa.prototype.tidur = function (jam){
//     this.energi += jam * 2;
//     return `Halo ${this.nama} Selamat tidur`;
// }


// let zulfikar = new Mahasiswa ('Zulfikar', 5000);

//Versi Class
class Mahasiswa{
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi
    }
   makan = function (porsi){
            this.energi += porsi;
            return `Halo ${this.nama} selamat makan`;
        }
        main = function (jam){
            this.energi -= jam;
            return `Halo ${this.nama} selamat bermain`;
        }
          tidur = function (jam){
            this.energi += jam * 2;
            return `Halo ${this.nama} Selamat tidur`;
        }
}

let zulfikar = new Mahasiswa ('Zulfikar',5000);
let jaki = new Mahasiswa ('jaki', 4500);







//3. Constructor Function 
//menggunakan keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan`)
//     }
      
//     this.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} Selamat Bermain`)
//     }
//     t 
// }
// let Zulfikar = new Mahasiswa('Zulfikar',5000);
// }