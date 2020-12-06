// 1
// მოცემულია მასივი:
// let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche"];
// ციკლის დახმარებით, ეკრანზე გამოიტანეთ ყველა ელემენტი, დაწყებული მეორე ელემენტისგან მე-5ის ჩათვლით;
// let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche"];
// for(i=1; i<5; i++){
//     console.log(cars[i])
// }

// 2
// შექმენით სახელების მასივი და დაბეჭდეთ ის სახელები რომლისს სიმბოლების რაოდენობა 3 ზე მეტია
// let names = ["diana" ,"qristina", "ana", "giorgi", "ia", "levani"];
// i=0;
// while(i<names.length){
//     if(names[i].length>3){
//         console.log(names[i]);
//     }
//     i++;
// }

// 3
// შექმენით ციფრების მასივი და გამოიტანეთ მარტო ლუწი რიცხვები და მარტო კენტი რიცხვები;
// let arr = [1, 5, 8, 6, 10, 17];
// var even = [];
// var odd =[];
// for(i=0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         even.push(arr[i]);
//     }
//     else{
//         odd.push(arr[i]);
//     }
// }
// console.log(even)
// console.log(odd)

// 4
// მოცემულია მასივი:
// let user = [‘name’, ‘age, 25, 50, ‘surname’, [100, 500] ];
// ჩადგმული მასივიდან ამოიღეთ მეორე ელემენტი; ანუ 500;
// let user = ["name", "age", 25, 50, "surname", [100, 500] ];
// console.log(user[5][1])

// 5
// მოცემულია ობიექტი:
// var person = {
//   firstname: "john",
//   lastname: "doe",
//   age: 50,
//   eyecolor: "blue"
// };
// ამოიღეთ person ცვლადის თვალის ფერი;
// var person = {
//   firstname: "john",
//   lastname: "doe",
//   age: 50,
//   eyecolor: "blue"
// };
// console.log(person.eyecolor)

// 6
// შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;
// let arr = ["hello", "car", 5, "dancing", 17];
// var i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// 7
// შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// დაბეჭდეთ მასივისი ახალი ელემენტები
// let arr = [5, 25, 89, 120, 3];
// arr.push("javascript", "python");
// arr.unshift("html", "css");
// console.log(arr.length)
// arr.shift();
// arr.pop();
// console.log(arr);

// 8
// შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
// let fruits = ["orange", "banana", "pear"];
// console.log(fruits.length);
// fruits.push("apple", "pineapple");
// fruits.unshift("watermelon");
// console.log(fruits.length);
// fruits.splice(2, 0, 'mango')
// fruits.shift();
// fruits.pop();
// console.log(fruits.length)

// 9
// მოცემულია მასივი:
// let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bently"];
// ციკლის დახმარებით,ეკრანზე გამოიტანეთ ყველა ელემენტი, დაწყებული მე-3 ელემენტისგან მე-6 ის ჩათვლით;
// slice-მეთოდის დახმარებით დააბრუნეთ ახალი მასივი ამ მნიშვნელობებით: ['bmw', 'lexus', 'volkswagen'];
// let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bently"];
// for(i=2; i<5; i++){
//     console.log(cars[i]);
// }
// console.log(cars.slice(1, 4))

// 10
// შექმენით სახელების მასივი და დაწერეთ შემდეგი პირობები :
// თუ მასივში არსებული ელემენტების რაოდენობა 5-ის ტოლია და მასივში ბოლო ელემენტია ნიკა, დაილოგოს ტექსტი "მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა".
// თუ მასივში არსებული ელემენტების რაოდენობა 7-ის ტოლია ან მასივში პირველი ელემენტია სანდრო, დაილოგოს ტექსტი "მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო".
// let name1 = ["sandro", "beqa", "lela", "mari", "nika", "eka"];
// if(name1.length == 5 && name1[-1] == "nika"){
//   console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
// }
// else if (name1.length == 7 || name1[0] == "sandro"){
//   console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო")
// }

// let name2 = ["sandro", "beqa", "lela", "mari", "nika"];
// if(name2.length == 5 && name2[4] == "nika"){
//   console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
// }
// else if (name2.length == 7 || name2[0] == "sandro"){
//   console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო")
// }
