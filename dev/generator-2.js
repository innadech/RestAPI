import xml2js from 'xml2js'

// const obj = {
//   car: {
//     brand: 'Audi',
//     price: 33000,
//   },
// }

const obj = {
  cars: [
    {
      car: {
        brand: 'Audi',
        price: 33000,
      },
    },
  ],
}

// Настраиваем билдер
const builder = new xml2js.Builder({
  xmldec: { version: '1.0', encoding: 'UTF-8' },
  // Вот здесь прописываем вашу DTD схему
  doctype: { sysID: 'schema.dtd' },
})

const xml = builder.buildObject(obj)
console.log(xml)

// Write
// Everything
// Twice
