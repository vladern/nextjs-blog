import { parseISO, format } from 'date-fns'
interface DateParams {
  dateString: string 
}

export default function Date({ dateString }: DateParams) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}