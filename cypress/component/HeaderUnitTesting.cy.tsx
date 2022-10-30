import { Header } from '../../src/components/Header';

//this is a unit test for each element of component Header
describe('Test_Header', () => {
    // @ts-ignore
    const test = cy;
    // test left button Hamburguer if exist
    beforeEach(() => {
        // run this test as if in a desktop, else please remove it
        // browser with a 720p monitor
        test.viewport(1280, 720)
    })

    it('test_exist_btn_Hamburguer', () => {
        test.mount(<Header/>)
        test.get("#_btnHmbg").should("exist")
    });

    // test left button Hamburguer if we can click on
    it('test_click_btn_Hamburguer', () => {
        test.mount(<Header/>)
        test.get("#_btnHmbg").click()
    });

    // test logo of header if it is imported correctly
    it('test_exist_logo', () => {
        test.mount(<Header/>)
        test.get("#_logo").should('exist')
    });

    // test logo of header if it has a text
    it('test_have_text_logo', () => {
        test.mount(<Header/>)
        test.get("#_logo").contains('modaResa')
    });

    // test month of header if it is imported correctly
    it('test_exist_month', () => {
        test.mount(<Header/>)
        test.get("#_month").should('exist')
    });

    // test date of header if it is imported correctly
    it('test_exist_date', () => {
        test.mount(<Header/>)
        test.get("#_date").should('exist')
    });

    // test button createEvent if exist
    it('test_exist_btn_createEvent', () => {
        test.mount(<Header/>)
        test.get("#_btnEvent").should("exist")
        test.get("#_btnEvent").children('p').contains('+ Create event')
    });

    // test button createEvent if we can click on
    it('test_click_btn_createEvent', () => {
        test.mount(<Header/>)
        test.get("#_btnEvent").click()
    });

    // test button Profil if exist
    it('test_exist_btn_Profil', () => {
        test.mount(<Header/>)
        test.get("#_btnProfil").should("exist")
    });

    // test button Profil if we can click on
    it('test_click_btn_Profil', () => {
        test.mount(<Header/>)
        test.get("#_btnProfil").click()
    });

    // test icon search if it is imported correctly
    it('test_exist_icon_search', () => {
        test.mount(<Header/>)
        test.get("#_iconSearch").should('exist')
    });

    // test inputSearch if we can to input data
    it('test_input_search', () => {
        test.mount(<Header/>)
        test.get("#_inputSearch").type('This is just for testing input data')
    });
});
