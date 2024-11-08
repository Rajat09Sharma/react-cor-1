import { CORE_CONCEPTS } from "../data-with-examples"
import CoreConcept from "./CoreConcept"
import Section from "./Section"


export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core concepts">
        <main>
          <ul>
            {CORE_CONCEPTS.map((cocept => {
              return (
                <CoreConcept key={cocept.title} {...cocept} />
              )
            }))}
          </ul>
        </main>
      </Section>
  )
}
