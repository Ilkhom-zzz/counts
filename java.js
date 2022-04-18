
let arr = [4, 16, 19, 22, 11, 144, 967, 19124]
let even = []
let odd = []

for (let i = 0; i < arr.length; i++)
{
  if ((arr[i] % 2) === 0)
  {
    even.push(arr[i])
    console.log(even);
   
  }else{
      odd.push(arr[i])
      console.log(odd);
  }
}
