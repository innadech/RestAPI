import { create } from 'xmlbuilder2'

const xmlDocument = create({ version: '1.0', encoding: 'UTF-8' })
  .dtd({ sysID: 'car.dtd' })
  .ele('car')
  .ele('brand')
  .txt('Audi')
  .up()
  .ele('price')
  .txt('33000')
  .up()
  .end({ prettyPrint: true })

console.log(xmlDocument)
