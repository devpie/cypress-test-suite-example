export const changeSetting =
  ([settingsUrl, inputType, newValueId, newValue, backButtonName]:
     [string, string, string, string, string]): void => {
    cy.log('Changing the following setting and waiting due to rate limiting:', settingsUrl);
    cy.wait(5000);
    cy.get(`a[href="${settingsUrl}"]`).should('be.visible').click();
    switch (inputType) {
      case 'text':
        changeText(newValue);
        break;
      case 'select':
        changeSelect(newValueId, backButtonName);
        break;
      default:
        throw new Error(`Setting type '${inputType}' does not exist!`);
    }
    cy.get(`a[href="${settingsUrl}"]`).should('contain', newValue);
  };

const changeText = (newValue: string) => {
  cy.get('input').clear().type(newValue, {force: true});
  cy.get('[data-testid="settingsDetailSave"]').first().click();
};

const changeSelect = (newValueId: string, backButtonName: string) => {
  cy.get('select').select(newValueId);
  cy.get('[data-testid="settingsDetailSave"]').first().click();
  cy.get(`[aria-label="${backButtonName}"]`).first().click();
};
