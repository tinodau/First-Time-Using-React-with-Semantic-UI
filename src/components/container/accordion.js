import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const AccordionContent = () => (
	<Accordion className="">
    <Accordion.Title>
      <Icon name='dropdown' />
      Lorem Ipsum 1?
    </Accordion.Title>
    <Accordion.Content>
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
        {' '}it can be found as a welcome guest in many households across the world.
      </p>
    </Accordion.Content>
    <Accordion.Title>
      <Icon name='dropdown' />
      Dolor sit amet?
    </Accordion.Title>
    <Accordion.Content>
      <p>
        There are many breeds of dogs. Each breed varies in size and temperament.
        {' '}Owners often select a breed of dog that they find to be compatible
        with their own lifestyle and desires from a companion.
      </p>
    </Accordion.Content>
    <Accordion.Title>
      <Icon name='dropdown' />
      Consectetur adipiscing elit?
    </Accordion.Title>
    <Accordion.Content>
      <p>
        Three common ways for a prospective owner to acquire a dog is from pet shops,
        {' '}private owners, or shelters.
      </p>
      <p> A pet shop may be the most convenient way to buy a dog.
        {' '}Buying a dog from a private owner allows you to assess the pedigree and
        {' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
        {' '}from a shelter, helps give a good home to a dog who may not find one so readily.
      </p>
    </Accordion.Content>
  </Accordion>
)

export default AccordionContent
