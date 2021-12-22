import { InputTextComponent } from '../../src/app/shared/components/inputs/input-text/input-text.component';

describe('InputTextComponent', () => {
  it('Should component is Input', () => {
    cy.get('input').should(($input) => {
      const val = $input.val();
      console.log(val);
    });
  });
  it('Should properties input text', () => {
    cy.get('[name=controlName]').should(($input) => {
      const name = $input.val();
      console.log(name);
    });
  });
});

// cy.get('input[type=text]').type('Test all the things', { force: true })
