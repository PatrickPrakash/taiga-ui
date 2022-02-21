import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    MULTI_SELECT_PAGE_URL,
} from '../../../support/shared.entities';

describe('MultiSelect', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.goToDemoPage(MULTI_SELECT_PAGE_URL);
        cy.hideHeader();
    });

    it('does not overflow arrow icon by many tags', () => {
        cy.get('#object-array').findByAutomationId('tui-doc-example').as('wrapper');

        cy.get('@wrapper').find('tui-multi-select').click();

        [0, 1, 2, 3].forEach(() => cy.get('[tuioption]').first().click());

        cy.get('@wrapper').findByAutomationId('tui-multi-select__arrow').click();

        cy.get('@wrapper')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`01-not-overflow-by-tags`);
    });

    it('checking that the arrow icon is rotated when enabled tuiTextfieldCleaner', () => {
        cy.goToDemoPage(
            'components/multi-select/API?tuiMode=null&tuiTextfieldCleaner=true',
        );
        cy.hideHeader();
        cy.hideNavigation();

        cy.getByAutomationId('tui-multi-select__arrow').click({force: true});

        [0, 1, 2, 3, 4].forEach(index => {
            cy.get('tui-data-list-wrapper')
                .findByAutomationId('tui-data-list-wrapper__option')
                .eq(index)
                .click({force: true});
        });

        cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION).matchImageSnapshot(
            '02-multi-select-before-clear',
            {capture: 'viewport'},
        );

        cy.getByAutomationId('tui-multi-select__arrow').click({force: true});

        cy.getByAutomationId('tui-input-tag__cleaner')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click({force: true});

        cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION).matchImageSnapshot(
            '03-multi-select-after-clear',
            {capture: 'viewport'},
        );
    });
});