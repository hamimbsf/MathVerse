// 🔢 GCD(Greatest Common Divisor) / HCF(Highest Common Factor)

// 👉 কোনো দুটি বা একাধিক সংখ্যার মধ্যে সবচেয়ে বড় যেই সংখ্যা সবগুলোকেই নিঃশেষে ভাগ দিতে পারে, সেটাকেই GCD বা HCF বলে।

// 🧠 Example:

// ধরি,
// ১২ ও ১৮ — এদের GCD বা HCF কত?

// ১২ এর ভাজ্য সংখ্যা: ১, ২, ৩, ৪, ৬, ১২
// ১৮ এর ভাজ্য সংখ্যা: ১, ২, ৩, ৬, ৯, ১৮

// দুইটার common divisor: ১, ২, ৩, ৬

// এর মধ্যে সবচেয়ে বড়টা: ৬ 👉 এটাই হলো GCD(12, 18) = 6

// হাতে-কলমে / মুখে তো পারলাম এখন কোডে কিভাবে করা যায় দেখি

// Normal Solution :

let a = 20,
  b = 32;

// for (let i = 20; i >= 1; i--) {
//   if (a % i === 0 && b % i === 0) {
//     return console.log(i);
//   }
// }

// ⚡ Euclidean Algorithm (Efficient Way – O(log n)):

// while (a != b) {
//   if (a > b) a = a - b;
//   else b = b - a;
// }
// console.log(a);

function gcd(a, b) {
  if (a == b) return a;
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

console.log(gcd(a, b));
