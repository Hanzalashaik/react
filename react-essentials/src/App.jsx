import { useState } from "react"

import Header from '../components/Header/Header.jsx';
import CoreConcept from "../components/CoreComponents.jsx"
import TabButton from "../components/TabButton.jsx"

import componentsImg from './assets/components.png'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'

function App() {

  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts' >
          <h2>Core Concepts</h2>
          <ul>
              {/* Efficient Method */}
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} /> ))}


            {/* First Method to sending the props */}
            {/* <CoreConcept
              title='Components'
              description='The core UI building block - compose the user interface by combining multiple components.'
              image={componentsImg}
            /> */}

            {/* Second Method of Sending the props */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}

            {/* Third Method of Sending the Props */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}


          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>

            {/* Third method in TabButton.jsx*/}
            {/* <TabButton label='components'></TabButton> */}
          </menu>
          {!selectedTopic ? <p>Please select the topic</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
