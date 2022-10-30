import { Header } from '../../src/components/Header';

//this is a unit test for each element of component Header

describe('Test_Header', () => {
    // test left button Hamburguer if exist
    beforeEach(() => {
        // run this test as if in a desktop, else please remove it
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })

    it('test_exist_btn_Hamburguer', () => {
        cy.mount(<Header/>)
        cy.get("#_btnHmbg").should("exist")
    });

    // test left button Hamburguer if we can click on
    it('test_click_btn_Hamburguer', () => {
        cy.mount(<Header/>)
        cy.get("#_btnHmbg").click()
    });

    // test logo of header if it is imported correctly
    it('test_exist_logo', () => {
        cy.mount(<Header/>)
        cy.get("#_logo").should('exist')
    });

    // test logo of header if it has a text
    it('test_have_text_logo', () => {
        cy.mount(<Header/>)
        cy.get("#_logo").contains('modaResa')
    });

    // test month of header if it is imported correctly
    it('test_exist_month', () => {
        cy.mount(<Header/>)
        cy.get("#_month").should('exist')
    });

    // test date of header if it is imported correctly
    it('test_exist_date', () => {
        cy.mount(<Header/>)
        cy.get("#_date").should('exist')
    });

    // test button createEvent if exist
    it('test_exist_btn_createEvent', () => {
        cy.mount(<Header/>)
        cy.get("#_btnEvent").should("exist")
        cy.get("#_btnEvent").children('p').contains('+ Create event')
    });

    // test button createEvent if we can click on
    it('test_click_btn_createEvent', () => {
        cy.mount(<Header/>)
        cy.get("#_btnEvent").click()
    });

    // test button Profil if exist
    it('test_exist_btn_Profil', () => {
        cy.mount(<Header/>)
        cy.get("#_btnProfil").should("exist")
    });

    // test button Profil if we can click on
    it('test_click_btn_Profil', () => {
        cy.mount(<Header/>)
        cy.get("#_btnProfil").click()
    });

    // test icon search if it is imported correctly
    it('test_exist_icon_search', () => {
        cy.mount(<Header/>)
        cy.get("#_iconSearch").should('exist')
    });

    // test inputSearch if we can to input data
    it('test_input_search', () => {
        cy.mount(<Header/>)
        cy.get("#_inputSearch").type('This is just for testing input data')
    });
});
