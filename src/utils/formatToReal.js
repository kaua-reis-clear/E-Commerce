export default function toReal(value) {
  return `R$ ${value.toFixed(2).toString().replace('.', ',')}`
}