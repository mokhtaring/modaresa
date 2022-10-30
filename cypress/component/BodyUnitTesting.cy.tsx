import { EventsCalendar } from '../../src/components/EventsCalendar';
import { controls , systems } from '../../src/mocks/navItems';
import { Header } from '../../src/components/Header';

//this is a unit test for each element of component Header

describe('Test_Aside', () => {
    // test left button Hamburguer if exist
    beforeEach(() => {
        // run this test as if in a desktop, else please remove it
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })

    // automated test of all Aside buttons if it is imported correctly and if we can click on
    controls.map(item=>{
        it(`test_btn_${item.name}`, () => {
            cy.mount(<EventsCalendar/>)
            cy.get(`#${item.name}`).should("exist")
            cy.get(`#${item.name}`).click()
        });
    })

    systems.map(item=>{
        it(`test_btn_${item.name}`, () => {
            cy.mount(<EventsCalendar/>)
            cy.get(`#${item.name}`).should("exist")
            cy.get(`#${item.name}`).click()
        });
    })
});

describe('Test_Main', () => {
    // test left button Hamburguer if exist
    beforeEach(() => {
        // run this test as if in a desktop, else please remove it
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })

    // test miniCalendar month if it is imported correctly
    it('test_exist_miniCalendar_month', () => {
        cy.mount(<EventsCalendar/>)
        cy.get(".react-calendar").should('exist')
    });

    // test miniCalendar transfer between days and months
    it('test_miniCalendar_transfer_between_days_months', () => {
        cy.mount(<EventsCalendar/>)
        cy.get(".react-calendar__navigation").children("button").should("exist")
        cy.get(".react-calendar__navigation").children("button").click({ multiple: true })
    });

    // test if exist Events section
    it('test_exist_Events_section', () => {
        cy.mount(<EventsCalendar/>)
        cy.get("#_Events").contains('Events')
    });

    // test if exist main Scheduler
    it('test_exist_main_Scheduler', () => {
        cy.mount(<EventsCalendar/>)
        cy.get(".MuiPaper-root").should("exist")
    });

    // test check radio day if exist
    it('test_check_radio_dayWeekMonth', () => {
        cy.mount(<EventsCalendar/>)
        cy.get("._day").children('.MuiRadio-root').should("exist")
        cy.get("._week").children('.MuiRadio-root').should("exist")
        cy.get("._month").children('.MuiRadio-root').should("exist")
        cy.get("._day").children('.MuiRadio-root').click()
        cy.get("._week").children('.MuiRadio-root').click()
        cy.get("._month").children('.MuiRadio-root').click()
    });

});