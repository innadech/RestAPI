import xml2js from 'xml2js'

export default function convertor(json, schemaName) {
  const builder = new xml2js.Builder({
    xmldec: { version: '1.0', encoding: 'UTF-8' },
    doctype: { sysID: schemaName + '.dtd' },
  })
  const xml = builder.buildObject(json)
  return xml
}
