const LeadTranslator = (data: Array<any>): Array<Object> => {
  return data.map((item, idx) => {
    item.createdAt = formatCreatedDate(item.createdAt)
    return item
  })
}

function statusTranslate(val: string): string {
  switch (val) {
    case 'secondary':
      return 'Вторичная'
    case 'new':
      return 'Новая'
    case 'any':
      return 'Любая'
  }
  return ''
}

function typeTranslate(val: Object): Array<string> {
  return ['Коммерческая', 'Апартаменты']
}

function formatDeadlineDate(val: string): string {
  const date = new Date(val)

  return date.getFullYear().toString()
}

function formatCreatedDate(val: string): string {
  const date = new Date(val)
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ]
  return date.getDate() + ' ' + months[date.getMonth()]
}

export default LeadTranslator
