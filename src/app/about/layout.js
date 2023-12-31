import json from '@/json/pages/about'

export const metadata = {
  title: json.meta.title,
  description: json.meta.description,
  keywords: json.meta.keywords,
}

export default function Layout({children}) {
  return <>{children}</>
}
