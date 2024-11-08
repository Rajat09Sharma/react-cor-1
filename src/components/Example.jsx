import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButttons from "./TabButttons"
import { EXAMPLES } from "../data-with-examples";


export default function Example() {

    const [selectedTopic, setSelectedTopic] = useState("");

    function handleSelect(value) {
        setSelectedTopic(value)
    }

    let tabContent = <p>Please click a button.</p>
    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
        </div>
    }


    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButttons isSelected={selectedTopic == "components"} onSelect={() => handleSelect("components")} >Components</TabButttons>
                    <TabButttons isSelected={selectedTopic == "jsx"} onSelect={() => handleSelect("jsx")} >JSX</TabButttons>
                    <TabButttons isSelected={selectedTopic == "props"} onSelect={() => handleSelect("props")} >Props</TabButttons>
                    <TabButttons isSelected={selectedTopic == "state"} onSelect={() => handleSelect("state")} >State</TabButttons>

                </>
            }>
                {tabContent}
            </Tabs>

        </Section>
    )
}
