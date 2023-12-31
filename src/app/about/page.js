import BaseSection from '@/components/base/section'
import json from '@/json/pages/about'

export default function About() {
  return (
    <>
      <BaseSection
        title={json.sections.about.title}
        description={
          <div
            dangerouslySetInnerHTML={{__html: json.sections.about.description}}
          />
        }
      />
    </>
  )
}
