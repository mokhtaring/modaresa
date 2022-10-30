import { EventsCalendar } from '../../src/components/EventsCalendar';
import { controls , systems } from '../../src/mocks/navItems';

//this is a unit test for each element of component Header

describe('Test_Aside', () => {
    // @ts-ignore
    const test = cy;
    beforeEach(() => {
        // run this test as if in a desktop, else please remove it
        // browser with a 720p monitor
        test.viewport(1280, 720)
    })

    // automated test of all Aside buttons if it is imported correctly and if we can click on
    controls.map(item=>{
        it(`test_btn_${item.name}`, () => {
            test.mount(<EventsCalendar/>)
            test.get(`#${item.name}`).should("exist")
            test.get(`#${item.name}`).click()
        });
    })

    systems.map(item=>{
        it(`test_btn_${item.name}`, () => {
            test.mount(<EventsCalendar/>)
            test.get(`#${item.name}`).should("exist")
            test.get(`#${item.name}`).click()
        });
    })
});

describe('Test_Main', () => {
    // @ts-ignore
    const test = cy;
    // test left button Hamburguer if exist
    beforeEach(() => {
        // run this test as if in a desktop, else please remove it
        // browser with a 720p monitor
        test.viewport(1280, 720)
    })

    // test miniCalendar month if it is imported correctly
    it('test_exist_miniCalendar_month', () => {
        test.mount(<EventsCalendar/>)
        test.get(".react-calendar").should('exist')
    });

    // test miniCalendar transfer between days and months
    it('test_miniCalendar_transfer_between_days_months', () => {
        test.mount(<EventsCalendar/>)
        test.get(".react-calendar__navigation").children("button").should("exist")
        test.get(".react-calendar__navigation").children("button").click({ multiple: true })
    });

    // test if exist Events section
    it('test_exist_Events_section', () => {
        test.mount(<EventsCalendar/>)
        test.get("#_Events").contains('Events')
    });

    // test if exist main Scheduler
    it('test_exist_main_Scheduler', () => {
        test.mount(<EventsCalendar/>)
        test.get(".MuiPaper-root").should("exist")
    });

    // test check radio day if exist and if we can transfer between days and months ...
    it('test_check_radio_dayWeekMonth', () => {
        test.mount(<EventsCalendar/>)
        test.get("._day").children('.MuiRadio-root').should("exist")
        test.get("._week").children('.MuiRadio-root').should("exist")
        test.get("._month").children('.MuiRadio-root').should("exist")
        test.get("._day").children('.MuiRadio-root').click()
        test.get("._week").children('.MuiRadio-root').click()
        test.get("._month").children('.MuiRadio-root').click()
    });

});