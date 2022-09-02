alert("taskNormal1")

let name = prompt(`Як тебе звуть?`)
alert(`Привіт ${name} !`)

alert(`taskNormal2`)

const nowYaer = 2022
let userYaer = prompt(`Якого року ти народився?`)
alert(`Я зрозумів, тобі ${nowYaer - userYaer} роки.`)

alert(`taskNormal3`)

let longQuadro = prompt(`Скажи мені, будь ласка, довжину однієї сторони квадрата, а я порахую його периметр.`)
alert(`Добре, якщо його сторона ${longQuadro} , то його периметр буде ${longQuadro * 4} . Сподіваюсь я правильно порахував.`)

alert(`taskMax1`)

const pNumber = 3.14
let circleRadius = prompt(`А тепер скажи мені радіус кола, а я порахую його площу.`)
alert(`Добре, якщо його радіус ${circleRadius} , то його площa буде ${pNumber * (circleRadius * circleRadius)} . Напевно і це правильно порахував.`)

alert(`taskMax2`)

let longRoad = prompt(`А ще давай трошки порахуемо. Скажи мені відстань між двома містами (у кілометрах)`)
let timeRoad = prompt(`Тепер, скажи за скільки годин ти хотів би дістатися з одного міста до іншого`)
alert (`Ok, ти повинен рухатися зі швидістю ${longRoad / timeRoad} км/год., щоб встигнути вчасно. `)


alert(`taskMax3`)

const usdRates = 36.94
const eurRates = 36.78
let convertedMany = prompt(`Майже все, і я тебе відпущу спатоньки.
Давай переведемо усі твої гроші з гривень у доллари?
Ми тільки порахуємо, забирати ніхто нічого не буде.
Скільки в тебе є гривень? А?`)
alert(`Тоді в тебе ${convertedMany / usdRates} долларів. Або ${convertedMany / eurRates} євро, хм, дивно, євро по курсу менший за доллар, дуже дивно, а нехай йому.
Дякую за твій час ${name}, було дуже приємно.
Бувай!` )